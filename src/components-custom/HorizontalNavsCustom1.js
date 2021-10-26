import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'center',
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<AppBar position="static">
  <Toolbar className={classes.toolbar}>
    <Link href="#" variant="h5" color="inherit" underline="none">
      <Typography variant="h6" component="h6" gutterBottom={true}>CloneHero CDN | Dash</Typography>
    </Link>
  </Toolbar>
</AppBar>
  );
}