
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  actionsBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  dashboardBox: {
    display: 'flex',
    height: '100vh',
    paddingTop: '6vh',
  },
  categoryList: {
    paddingTop: "64px",
  },
  drawer: {
    width: "250px",
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  corkBoard1: {
    flexGrow: 1,
  },
  corkBoard2: {
    flexGrow: 1,
  }
});

const Help = () => {
  const classes = useStyles();

  return (
    <>
        <Box className={classes.welcomeContainer}>
        <Card className={classes.welcomeCard} variant='outlined'>
          <CardContent >
            <Typography variant='h2' gutterBottom align='center' >Welcome to LoreKeeper!</Typography>
            <Typography align='center' >LoreKeeper is a dynamic notetaking app for your Dungeons and Dragons or TTRPG game.  <br /><br />
              Intuitively create notes connected to topics (e.g. NPCs, Locations, etc.) by including hashtags in your notes, <br />
              then easily access all notes associated with those topics.  <br /><br />
              Sign up and see how LoreKeeper can make running your game a lower CR monster than you ever thought possible! </Typography>
          </CardContent>
          <Box className={classes.actionsBox} >
            <CardActions right='24px' >
              <Button onClick={loginOpen} variant='contained' color='primary' >Login / Sign Up</Button>
            </CardActions>
          </Box>
        </Card>
      </Box>
        <Card className={classes.helpCard} >
        <CardContent>
            <Typography >How to use: Just start typing!  Every note automatically includes the current session's tag, but you can add existing or new tags by just adding a '#' at the beginning of its name! (Avoid puntuation like apostrophes and commas.  Hyphens are cool though)</Typography>
        </CardContent>
        </Card>
    </>
  );
}

export default Help;