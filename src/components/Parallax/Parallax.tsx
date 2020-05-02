import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// core components
import styles from 'assets/jss/material-kit-react/components/parallaxStyle.js';

interface StyleProps {
  parallax: BaseCSSProperties;
  filter: BaseCSSProperties;
  small: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function Parallax(props: ParallaxProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    'translate3d(0,' + windowScrollTop + 'px,0)'
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };
  const { filter, className, children, style, image, small } = props;

  const parallaxClasses = classNames(className, {
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
  });

  let computedStyles = {
    backgroundImage: 'url(' + image + ')',
    transform: transform
  };

  if (typeof styles === 'object') {
    computedStyles = {...style, ...computedStyles}
  }

  return (
    <div className={parallaxClasses} style={computedStyles}>
      {children}
    </div>
  );
}

type ParallaxProps = {
  className?: string;
  filter?: boolean;
  children?: React.ReactNode;
  style?: BaseCSSProperties;
  image: string;
  small?: boolean;
};
