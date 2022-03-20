import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    '@media (max-width: 992px)': {
      flexDirection: 'column'
    }
  },
  textBlock: {

  },
  imageBlock: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  imageWrapper: {
    padding: 20,
    position: 'relative',
    width: '100%',
    maxWidth: 320
  },
  rect: {
    position: 'absolute'
  },
  rectA: {
    zIndex: 0,
    backgroundColor: '#fbadb0',
    top: 0,
    left: 0,
    height: '50%',
    width: '50%'
  },
  rectB: {
    zIndex: 1,
    backgroundColor: '#adcce9',
    top: '30%',
    left: '50%',
    height: '70%',
    width: '50%'
  },
  image: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  landscape: {
    '& $imageWrapper': {
      maxWidth: 500
    }
  }
})

interface ContentBlockProps {
  imageUrl: string
  children: ReactNode
  flip?: boolean
  landscape?: boolean
}

function ContentBlock ({ imageUrl, children, flip = false, landscape = false }: ContentBlockProps) {
  const classes = useStyles()

  const imageBlockDOM = (
    <div
      className={classNames([classes.imageBlock, { [classes.landscape]: landscape }])}
    >
      <div className={classes.imageWrapper}>
        <div className={classNames(classes.rect, classes.rectA)}></div>
        <div className={classNames(classes.rect, classes.rectB)}></div>
        <img src={imageUrl} className={classes.image} />
      </div>
    </div>
  )

  const textBlockDOM = (
    <div className={classes.textBlock}>
      {children}
    </div>
  )

  return (
    <div className={classes.container}>
      {flip && textBlockDOM}
      {imageBlockDOM}
      {!flip && textBlockDOM}
    </div>
  )
}

export default React.memo(ContentBlock)
