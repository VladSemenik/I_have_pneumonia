import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  parallax: {
    perspective: '1px',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  parallax__layer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  back: {
    transform: 'translateZ(-1px) scale(2)'
  },
  base: {
    transform: 'translateZ(0)'
  }
})

function Parallax({ children, back }) {
  const classes = useStyles()

  return <div className={classes.parallax}>
    <div className={clsx(classes.parallax__layer, classes.back)}>
      {back}
    </div>
    <div className={clsx(classes.parallax__layer, classes.base)}>
      {children}
    </div>
  </div>
}

export default Parallax
