"use client"

import { useState, useCallback, useEffect } from 'react';
import { Divider, Box } from '@mui/material';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import AppCard from '@/app/(DashboardLayout)/components/shared/AppCard';
import AppSidebar from '@/app/(DashboardLayout)/layout/shared/appsidebar/AppSidebar';
import IndikatorList from '@/app/(DashboardLayout)/components/indikator/IndikatorList';
import callAPI from '@/config/api/callApi';
import { useDispatch } from "@/store/hooks";
import { getIndikator } from '@/store/apps/indikator/indikatorSlice';

type Props = {
  params: { indikator: string }
}

const Chats = ({ params }: Props) => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const menu = params.indikator
  const title = (params.indikator == 'keuangan') ? 'Keuangan' : 'Aset';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndikator(params.indikator))
  }, [])

  return (
    <PageContainer title={title} description={`penginputan indikator ${menu} daerah`}>
      <Breadcrumb title={`Indikator ${title} Daerah`} subtitle={`Menu penginputan indikator ${menu} daerah`} />
      <AppCard>
        <AppSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        <Box flexGrow={1}>
          <IndikatorList onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)} />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default Chats;
