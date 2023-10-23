import React, { useState } from 'react';
import { sum } from 'lodash';
import { IconShoppingCart, IconX } from '@tabler/icons-react';
import { Box, Typography, Badge, Drawer, IconButton, Button, Stack } from '@mui/material';
import Link from 'next/link';
// import CartItems from './CartItem';

const Cart = () => {


  const [showDrawer, setShowDrawer] = useState(false);
  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const cartContent = (
    <Box>
      {/* ------------------------------------------- */}
      {/* Cart Content */}
      {/* ------------------------------------------- */}
      <Box>
        {/* <CartItems /> */}
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setShowDrawer(true)}
        sx={{
          color: 'text.secondary',
          ...(showDrawer && {
            color: 'primary.main',
          }),
        }}
      >

      </IconButton>
      {/* ------------------------------------------- */}
      {/* Cart Sidebar */}
      {/* ------------------------------------------- */}
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        PaperProps={{ sx: { maxWidth: '500px' } }}
      >
        <Box display="flex" alignItems="center" p={3} pb={0} justifyContent="space-between">
          <Typography variant="h5" fontWeight={600}>
            Shopping Cart
          </Typography>
          <Box>
            <IconButton
              color="inherit"
              sx={{
                color: (theme) => theme.palette.grey.A200,
              }}
              onClick={handleDrawerClose}
            >
              <IconX size="1rem" />
            </IconButton>
          </Box>
        </Box>

        {/* component */}
        {cartContent}
        {/* ------------------------------------------- */}
        {/* Checkout  */}
        {/* ------------------------------------------- */}

      </Drawer>
    </Box>
  );
};

export default Cart;
