import React from 'react';
import { Box, Avatar, Typography, Card, CardContent, Grid, Divider, Stack, useTheme } from '@mui/material';
import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';

const WelcomeCard = () => {
  const theme = useTheme();
  return (
    <Card elevation={0} style={{ background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)` }} sx={{ color: 'white', py: 0 }}>
      <CardContent sx={{ py: 4, px: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item sm={6} display="flex" alignItems="center">
            <Box>
              <Box
                gap="16px" mb={5}
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'flex',
                  },
                  alignItems: 'center',
                }}
              >
                <Avatar src='/images/profile/user-1.jpg' alt="img" sx={{ width: 40, height: 40 }} />
                <Typography variant="h5" whiteSpace="nowrap">
                  Selamat datang, T. Wahyu Munawarah
                </Typography>
              </Box>

              <Stack spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                <Box>
                  <Typography variant="h2" whiteSpace="nowrap">85%<span><IconArrowUpRight width={18} color="#39B69A" /></span></Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">Indikator Keuangan</Typography>
                </Box>
                <Box>
                  <Typography variant="h2" whiteSpace="nowrap">35%<span><IconArrowUpRight width={18} color="#39B69A" /></span></Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">Indikator Aset</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box mb="-51px">
              <Image src='/images/backgrounds/welcome-bg.svg' alt='img' width={340} height={204} style={{ width: "340px", height: "204px" }} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
