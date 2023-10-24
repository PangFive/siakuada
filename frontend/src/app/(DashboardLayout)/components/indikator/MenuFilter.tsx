import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '@/store/hooks';
import {
  ListItemText,
  ListItemButton,
  List,
  Divider,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { IconCheck } from '@tabler/icons-react';
import {
  IconChecklist as Icon
} from '@tabler/icons-react';
import { Stack } from '@mui/system';
import { updateActive } from '@/store/apps/indikator/indikatorSlice';

const MenuFilter = () => {
  const dispatch = useDispatch();

  const customizer = useSelector((state) => state.customizer);
  const indikator = useSelector((state) => state.indikator);
  const br = `${customizer.borderRadius}px`;


  const filterAspek: any[] = indikator.indikator.ref_aspek.map((item: any) => ({
    id: item.id,
    name: item.nama_aspek,
    sort: item.nama_aspek,
    icon: Icon,
    color: 'primary.main',
  }));

  const [activeBar, setActiveBar] = useState();

  return (
    <>
      <List>
        <Typography variant="subtitle2" fontWeight={600} px={3} mt={2} pb={2}>
          Kelompok
        </Typography>
        {filterAspek.map((filter) => {
          return (
            <ListItemButton
              sx={{ mb: 1, mx: 3, borderRadius: br }}
              selected={indikator.activeAspekId === filter.id}
              onClick={() => dispatch(updateActive(filter.id))}
              key={filter.id}
            >
              <ListItemIcon sx={{ minWidth: '30px', color: filter.color }}>
                <filter.icon stroke="1.5" size="19" />
              </ListItemIcon>
              <ListItemText>{filter.name}</ListItemText>
              <Divider />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};

export default MenuFilter;
