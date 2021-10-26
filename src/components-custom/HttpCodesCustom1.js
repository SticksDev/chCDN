import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section>
  <Container maxWidth="md">
    <Box pt={8} pb={10}>
      <Typography variant="h1">503</Typography>
      <Typography variant="h4" component="h2" gutterBottom={true}>Yikes, seems like an internal server error occured</Typography>
      <Typography variant="subtitle1" color="textSecondary">Please contact sticks with the error: SQLSTATE[FIREBASE.ts]: FAILURE TO CONNECT, SERVICE UNREACHABLE</Typography>
    </Box>
  </Container>
</section>
  );
}