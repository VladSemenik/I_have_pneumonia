import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 400,
    width: '100%',
    '& > div': {
      alignSelf: 'stretch'
    }
  }
})

function Banner() {
  const classes = useStyles()

  return <div className={classes.container}>
  </div>
}

export default Banner
