import React from 'react';
import { Box, useTheme } from '@mui/material';
import DashboardCard from '../shared/DashboardCard';
import Image from 'next/image';

const MapCard = () => {
  // chart color
  const theme = useTheme();

  return (
    <DashboardCard
      title="Dashboard Indikator Daerah"
    >
      <Box px={5}>
        <Image src='/images/id.svg' alt='img' width={100} height={100} style={{ width: "100%", height: "100%" }} />
      </Box>
    </DashboardCard>
  );
};

export default MapCard;
