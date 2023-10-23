import {
  Box,
  Typography,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { loginType } from "@/app/(DashboardLayout)/types/auth/auth";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { useState, useCallback } from "react";
import callAPI from "@/config/api/callApi";
import { useRouter } from "next/navigation";
import AlertCart from "@/app/(DashboardLayout)/components/shared/AlertCart";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Cookies from 'js-cookie';


const validationSchema = yup.object({
  password: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  username: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Username is Required'),
});

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {

  const [cartalert, setCartalert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const route = useRouter();

  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    setCartalert(false);
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);


    const { username, password } = formik.values

    const data = { username, password }
    const response = await callAPI({ url: '/auth/sigin', method: "POST", data })
    if (response.status == 200) {
      setIsError(false);
      handleClick();
      Cookies.set("x-access-token", response.data.data.token, { expires: 7 });

      setTimeout(() => {
        route.push('/')
      }, 600)
    } else if (response.status == 401) {
      setIsError(true);
      handleClick();
    }


    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      username: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (value) => {
      await handleSubmit(value)
    }
  });

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}
      {subtext}
      <form onSubmit={formik.handleSubmit}>
        <Stack>
          <Box>
            <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
            <CustomTextField
              placeholder="Username"
              id="username"
              variant="outlined"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              fullWidth
            />
          </Box>
          <Box>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              id="password"
              type="password"
              placeholder="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
            />
          </Box>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
          </Stack>
        </Stack>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            sx={{ height: 40 }}
          >
            {loading ? <CircularProgress size={30} style={{ color: "#ffff" }} />
              : "Sign In"}
          </Button>
        </Box >
      </form>
      <AlertCart text={isError ? "Login Gagal" : "Login Berhasil"} handleClose={handleClose} openCartAlert={cartalert} jenis={isError ? "error" : "success"} />
      {subtitle}
    </>
  )
};

export default AuthLogin;
