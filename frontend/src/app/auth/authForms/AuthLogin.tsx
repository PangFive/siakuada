import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { loginType } from "@/app/(DashboardLayout)/types/auth/auth";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { useEffect, useState, SyntheticEvent } from "react";
import callAPI from "@/config/api/callApi";
import { useRouter } from "next/navigation";

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {

  const [username, setUsename] = useState('');
  const [password, setPassword] = useState('');
  const route = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { username, password }
    const response = await callAPI({ url: '/auth/sigin', method: "POST", data })
    if (response.status == 200) {
      localStorage.setItem('token', response.data.data.token)
      // console.log(response.data.data.token);
      route.push('/')
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <form onSubmit={handleSubmit}>
        <Stack>
          <Box>
            <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
            <CustomTextField value={username} placeholder="Username" id="username" variant="outlined" onChange={(e: any) => setUsename(e.target.value)} fullWidth />
          </Box>
          <Box>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              value={password}
              id="password"
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="password"
              variant="outlined"
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
          >
            Sign In
          </Button>
        </Box >
      </form>
      {subtitle}
    </>
  )
};

export default AuthLogin;
