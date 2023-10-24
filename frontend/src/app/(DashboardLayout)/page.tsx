'use client'
import { Grid, Box } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import WelcomeCard from '@/app/(DashboardLayout)/components/dashboards/WelcomeCard';
import StatusPenginputan from './components/dashboards/StatusPenginputan';
import MapCard from './components/dashboards/MapCard';
import ProductPerformances from './components/dashboards/ProductPerformances';

import { useRouter } from 'next/navigation';
import { useDispatch } from "@/store/hooks";
import { checkAuth } from '@/store/apps/auth/authSlice';

export default function Dashboard() {

  const route = useRouter();

  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())
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

          {/* <Grid item xs={12} lg={12}>
            <ProductPerformances />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  )
}

