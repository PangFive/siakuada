import React from 'react';
import DashboardCard from '../shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Chip, Link, Typography } from '@mui/material';

const StatusPenginputan = () => {
  return (
    <DashboardCard title="Status Penginputan">
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '-30px',
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent>
              <Chip
                sx={{
                  bgcolor: (theme) => theme.palette.primary.light,
                  color: (theme) => theme.palette.primary.main,
                  borderRadius: '6px',
                  width: 80,
                }}
                size="small"
                label="Proses"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Indikator Keuangan</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent><Chip
              sx={{
                bgcolor: (theme) => theme.palette.success.light,
                color: (theme) => theme.palette.success.main,
                borderRadius: '6px',
                width: 80,
              }}
              size="small"
              label="Selesai"
            /></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>Indikator Asset</TimelineContent>
          </TimelineItem>
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default StatusPenginputan;
