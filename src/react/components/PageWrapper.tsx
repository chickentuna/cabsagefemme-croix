import PageTitle from './PageTitle'
import React, { HTMLProps, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { Helmet } from 'react-helmet'

const useStyle = createUseStyles({
  wrapper: {
    flex: '1 1 auto',
    padding: [20, 30, 50, 30],
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
  }
})

interface PageWrapperProps extends Omit<HTMLProps<Element>, 'title'> {
  title?: ReactNode
  titleDecorationUrl?: string
  titleColor?: string
  maxWidth?: number
  helmet?: string
}

function PageWrapper ({ children, helmet, style, title, titleDecorationUrl, titleColor }:PageWrapperProps) {
  const classes = useStyle()

  return (
    <>
      {(helmet ?? title) != null && (
        <Helmet
          title={`Sage-femme Restinclières - ${helmet ?? title}`}
        />
      )}
      {title != null && (
        <PageTitle
          titleDecorationUrl={titleDecorationUrl}
          text={title}
          color={titleColor}
        />
      )}
      <div
        className={classes.wrapper}
        style={style}
      >
        {children}
      </div>
    </>
  )
}

export default React.memo(PageWrapper)
