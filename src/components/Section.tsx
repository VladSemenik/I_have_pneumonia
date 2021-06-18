import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    '& > div': {
      alignSelf: 'stretch'
    },
  },
  header: {
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
  },
  content: {
  },
  skilet: {
    width: 900,
  },
})

interface Props {
  title: string
  backgroudColor: string
}

const Section: FC<Props> = ({ backgroudColor, title, children }) => {
  const classes = useStyles()

  return <div className={classes.container} style={{ backgroundColor: backgroudColor }}>
    <div className={clsx(classes.header)}>
      <Typography variant={'h2'}>{title}</Typography>
    </div>
    <div className={clsx(classes.content)}>{children}</div>
  </div>
}

export default Section
