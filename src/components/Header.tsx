import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { colors } from '../modules/theme'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    '& > div': {
      alignSelf: 'stretch'
    }
  },
  skilet: {
    width: 900
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: colors.blackBG,
    padding: '0 1rem',
    fontFamily: 'Baloo',
    color: colors.whiteFont
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    backgroundColor: colors.whiteBG,
    padding: '0 1rem',
  }
})

function Header() {
  const classes = useStyles()

  return <div className={classes.container}>
    <div className={clsx(classes.socialContainer)}>
      <div className={classes.skilet}>
        <Typography>Pneumonia Neuro Detection</Typography>
      </div>
    </div>
    <div className={clsx(classes.navBar)}>
      <div className={classes.skilet}>
        <Typography variant={'h6'}>
          PND
          Neuro Technologies
        </Typography>
      </div>
    </div>
  </div>
}

export default Header
