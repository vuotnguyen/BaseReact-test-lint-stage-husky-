import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Box from '@src/components/Box';
import { hours, minutes } from './constants';

const Screen4 = () => {

  return (
    <Box flexDirection="row" background='green'>

    </Box>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 180,
  },
});

export default Screen4;
