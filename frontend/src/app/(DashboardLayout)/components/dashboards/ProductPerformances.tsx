import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../shared/DashboardCard';
import CustomSelect from '../forms/theme-elements/CustomSelect';
import {
  MenuItem,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TableContainer,
  Stack,
} from '@mui/material';

const ProductPerformances = () => {
  // for select
  const [tahun, setTahun] = React.useState('2023');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTahun(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const grey = theme.palette.grey[300];
  const primarylight = theme.palette.primary.light;
  const greylight = theme.palette.grey[100];

  //   // chart 1
  const optionsrow1chart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 35,
      width: 100,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [primarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  const seriesrow1chart = [
    {
      name: 'Customers',
      color: primary,
      data: [30, 25, 35, 20, 30],
    },
  ];

  // chart 2
  const optionsrow2chart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 35,
      width: 100,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [greylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  const seriesrow2chart = [
    {
      name: 'Customers',
      color: grey,
      data: [30, 25, 35, 20, 30],
    },
  ];

  // chart 3
  const optionsrow3chart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 35,
      width: 100,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [primarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  const seriesrow3chart = [
    {
      name: 'Customers',
      color: primary,
      data: [30, 25, 35, 20, 30],
    },
  ];

  // chart 4
  const optionsrow4chart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 35,
      width: 100,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [greylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };
  const seriesrow4chart = [
    {
      color: grey,
      data: [30, 25, 35, 20, 30],
    },
  ];

  return (
    <DashboardCard
      title="Keuangan Daerah"
      action={
        <CustomSelect
          labelId="month-dd"
          id="month-dd"
          size="small"
          value={tahun}
          onChange={handleChange}
        >
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </CustomSelect>
      }
    >
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Typography variant="subtitle2" fontWeight={600}>
                  Object
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Progress
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Priority
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Budget
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Chart
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Stack direction="row" spacing={2}>
                  <Avatar src={"/images/products/s6.jpg"} variant="rounded" alt="productOne" sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Loremp Ipsum
                    </Typography>
                    <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                      Loremp
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  78.5%
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    bgcolor: (theme) => theme.palette.success.light,
                    color: (theme) => theme.palette.success.main,
                    borderRadius: '6px',
                    width: 80,
                  }}
                  size="small"
                  label="Low"
                />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">$3.9k</Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={optionsrow1chart}
                  series={seriesrow1chart}
                  type="area"
                  height="35px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            {/* 2 */}
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Stack direction="row" spacing={2}>
                  <Avatar src={"/images/products/s9.jpg"} variant="rounded" alt="productTwo" sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Loremp Ipsum
                    </Typography>
                    <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                      Loremp
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  58.6%
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    bgcolor: (theme) => theme.palette.warning.light,
                    color: (theme) => theme.palette.warning.main,
                    borderRadius: '6px',
                    width: 80,
                  }}
                  size="small"
                  label="Medium"
                />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">$3.5k</Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={optionsrow2chart}
                  series={seriesrow2chart}
                  type="area"
                  height="35px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            {/* 3 */}
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Stack direction="row" spacing={2}>
                  <Avatar src={"/images/products/s7.jpg"} variant="rounded" alt="productThree" sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Loremp Ipsum
                    </Typography>
                    <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                      Loremp

                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  25%
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    bgcolor: (theme) => theme.palette.primary.light,
                    color: (theme) => theme.palette.primary.main,
                    borderRadius: '6px',
                    width: 80,
                  }}
                  size="small"
                  label="Very High"
                />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">$3.5k</Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={optionsrow3chart}
                  series={seriesrow3chart}
                  type="area"
                  height="35px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
            {/* 4 */}
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Stack direction="row" spacing={2}>
                  <Avatar src={"/images/products/s4.jpg"} variant="rounded" alt="productFour" sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Loremp Ipsum
                    </Typography>
                    <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                      Loremp
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  96.3%
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    bgcolor: (theme) => theme.palette.error.light,
                    color: (theme) => theme.palette.error.main,
                    borderRadius: '6px',
                    width: 80,
                  }}
                  size="small"
                  label="High"
                />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">$3.5k</Typography>
              </TableCell>
              <TableCell>
                <Chart
                  options={optionsrow4chart}
                  series={seriesrow4chart}
                  type="area"
                  height="35px"
                  width="100px"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
};

export default ProductPerformances;
