'use client'
import { Grid, Box } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import WelcomeCard from '@/app/(DashboardLayout)/components/dashboards/WelcomeCard';
import StatusPenginputan from './components/dashboards/StatusPenginputan';
import MapCard from './components/dashboards/MapCard';
import callAPI from '@/config/api/callApi';
import { useRouter } from 'next/navigation';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

export default function Dashboard() {

  const route = useRouter();

  const [isLoading, setLoading] = useState(true);

  const getAuth = useCallback(async () => {
    const response = await callAPI({ url: '/auth', method: "GET", serverToken: Cookies.get('x-access-token') })
  }, []);

  useEffect(() => {
    getAuth()
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <WelcomeCard />
          </Grid>

          <Grid item xs={12} lg={4}>
            <StatusPenginputan />
          </Grid>
          {/* column */}

          <Grid item xs={12} lg={12}>
            <MapCard />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

