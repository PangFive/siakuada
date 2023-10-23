import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack, Badge, Avatar, Chip, useTheme } from '@mui/material';
import { useSelector, useDispatch } from '@/store/hooks';
import { toggleSidebar, toggleMobileSidebar } from '@/store/customizer/CustomizerSlice';
import { IconMenu2 } from '@tabler/icons-react';
import Profile from './Profile';
import { RootState } from '@/store/store';
// import MobileRightSidebar from './MobileRightSidebar';
import Info from './Info';

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

  // drawer
  const customizer = useSelector((state: RootState) => state.customizer);
  const dispatch = useDispatch();

  const theme = useTheme();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
        >
          <IconMenu2 size="20" />
        </IconButton>
        {lgUp ? (
          <>
            <Info />
          </>
        ) : null}

        <Box flexGrow={1} />
        <Box mx={2}>
          <Chip sx={{ paddingX: 2 }} label="2023" color="primary" size="small" />
        </Box>
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
