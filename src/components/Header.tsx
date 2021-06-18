import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

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
    backgroundColor: '#252324',
    padding: '0 1rem',
    fontFamily: 'Baloo',
    color: `rgb(${202},${221},${230})`
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    backgroundColor: '#F0FAFE',
    padding: '0 1rem',
  }
})

function Header() {
  const classes = useStyles()

  return <div className={classes.container}>
    <div className={clsx(classes.socialContainer)}>
      <div className={classes.skilet}>
        Pneumonia Neuro Detection
      </div>
    </div>
    <div className={clsx(classes.navBar)}>
      <div className={classes.skilet}>
        FNNDSC

        Fetal-Neonatal Neuroimaging
        Developmental Science Center
      </div>
    </div>
  </div>
}

export default Header
