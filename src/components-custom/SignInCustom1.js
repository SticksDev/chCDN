import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    }
  },
  actions: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    },
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section>
  <Container maxWidth="xs">
    <Box pt={8} pb={10}>
      <Box mb={3} textAlign="center">
        <Link href="#" variant="h4" color="inherit" underline="none">
        </Link>
        <Typography variant="h5" component="h2">Sign in</Typography>
      </Box>
      <Box>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth name="email" id="email" label="beta key" autoComplete="email" />
            </Grid>
          </Grid>
          <Box my={2}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign in
            </Button>
          </Box>
          <Grid container spacing={2} className={classes.actions}>
          </Grid>
        </form>
      </Box>
    </Box>
  </Container>
</section>
  );
}