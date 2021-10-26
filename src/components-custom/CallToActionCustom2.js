import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section>
  <Container maxWidth="md">
    <Box py={8} textAlign="center">
      <Typography variant="h3" component="h2" gutterBottom={true}>Upload Chart</Typography>
      <Typography variant="h5" color="textSecondary">Upload your chart uisng the button below</Typography>
      <Box mt={4}>
        <Button variant="contained" size="large" color="primary">Upload!</Button>
      </Box>
    </Box>
  </Container>
</section>
  );
}