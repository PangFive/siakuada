import React, { useCallback, useEffect, useState } from "react";
import { filter, orderBy } from "lodash";
import {
  Box,
  Grid,
  Stack,
  CardContent,
  useMediaQuery,
  Typography,
  Rating,
  Fab,
  Tooltip,
  Button,
  Theme,
  Skeleton,
  Divider,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  FormControl,
  RadioGroup,
} from "@mui/material";
import { useSelector, useDispatch } from "@/store/hooks";
import { IconBasket, IconMenu2 } from "@tabler/icons-react";
import CustomRadio from "../forms/theme-elements/CustomRadio";
import { saveIndikator } from "@/store/apps/indikator/indikatorSlice";
import callAPI from "@/config/api/callApi";
import Cookies from 'js-cookie';
import AlertCart from "@/app/(DashboardLayout)/components/shared/AlertCart";

interface Props {
  onClick: (event: React.SyntheticEvent | Event) => void;
}

const IndikatorList = ({ onClick }: Props) => {
  const dispatch = useDispatch();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  const [cartalert, setCartalert] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    setCartalert(false);
  };

  const indikator = useSelector((state) => state.indikator);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepSkipped = (step: any) => skipped.has(step);

  const [value, setValue] = React.useState([]);
  const [activeValue, setActiveValue] = React.useState(0);


  const handleChange = (event: any) => {
    let data: any = [...value]

    let object: any = {
      id_indikator: indikator.indikator.id,
      id_aspek: indikator.activeAspekId,
      id_parameter: listParameter[0].ref_parameter[activeStep]?.id,
      id_kriteria: Number(event.target.value)
    };

    data[activeStep] = object
    setValue(data)
    setActiveValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    dispatch(saveIndikator(value)).then(() => {
      setIsError(false);
      handleClick();
    })
  }

  const listParameter: any = indikator.indikator.ref_aspek.filter((data: any) => {
    return data.id == indikator.activeAspekId
  })

  const getJawabanKriteria = useCallback(async (id: any) => {
    const response = await callAPI({ url: `/indikator/getJawabanKriteria/${id}`, method: "GET", serverToken: Cookies.get('x-access-token') });
    setValue(response.data.data)
    setActiveValue(response.data.data[activeStep]?.['id_kriteria']);
  }, []);

  useEffect(() => {
    // dispatch(getJawabanKriteria(indikator.activeAspekId));
    getJawabanKriteria(indikator.activeAspekId);
    setActiveStep(0);
  }, [indikator.activeAspekId])

  useEffect(() => {
    const data: any = value[activeStep] ? value[activeStep]['id_kriteria'] : 0
    setActiveValue(data);
  }, [activeStep])

  console.log('rendering')

  return (
    <>
      <Box style={{ height: '100%' }} >
        {/* ------------------------------------------- */}
        {/* Header Detail page */}
        {/* ------------------------------------------- */}
        <Box px={3} pt={2}>
          <Stack direction="row" justifyContent="space-between" pb={2}>
            {lgUp ? (
              <Typography variant="h5">Indikator</Typography>
            ) : (
              <Fab onClick={onClick} color="primary" size="small">
                <IconMenu2 width="16" />
              </Fab>
            )}
          </Stack>
        </Box>
        <Divider />
        {/* Mulai isi */}
        <Grid p={3}>
          <Stepper activeStep={activeStep}>
            {listParameter[0].ref_parameter.map((list: any, index: number) => {
              const stepProps: { completed?: boolean } = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }

              return (
                <Step key={list.id} {...stepProps}>
                  <StepLabel></StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <Box>
            <Box pt={5} px={5}>
              <Typography variant="h5">{listParameter[0].ref_parameter[activeStep]?.nama_parameter}</Typography>
              {/* <Typography variant="body1" sx={{ mt: 1 }}>
              Harap masukkan deskripsi pertanyaan pada kolom ini
            </Typography> */}
              <Grid item lg={12} sm={12} mt={2}>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="kriteria" name={"kriteria" + activeStep} value={activeValue} onChange={(e) => handleChange(e)}>
                    {
                      listParameter[0].ref_parameter[activeStep]?.ref_kriteria.map((kriteria: any) => {
                        return (
                          <FormControlLabel
                            value={kriteria.id}
                            control={<CustomRadio />}
                            label={kriteria.nama_kriteria}
                            key={kriteria.id}
                          />
                        )
                      })
                    }
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" mt={6} px={5}>
            <Button
              color="inherit"
              variant="contained"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box flex="1 1 auto" />

            <Button
              onClick={activeStep === listParameter[0].ref_parameter?.length - 1 ? handleSubmit : () => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
              variant="contained"
              color={activeStep === listParameter[0].ref_parameter?.length - 1 ? 'success' : 'primary'}
            >
              {activeStep === listParameter[0].ref_parameter?.length - 1 ? 'Save' : 'Next'}
            </Button>
          </Box>
        </Grid >
      </Box >
      <AlertCart text={isError ? "Gagal menyimpan" : "Berhasil Menyimpan"} handleClose={handleClose} openCartAlert={cartalert} jenis={isError ? "error" : "success"} />
    </>
  );
};

export default IndikatorList;
