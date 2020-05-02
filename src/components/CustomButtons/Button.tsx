import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import Button from '@material-ui/core/Button';

// core components

import buttonStyle from 'assets/jss/material-kit-react/components/buttonStyle.js';

interface StyleProps {
  button: BaseCSSProperties;
  fullWidth: BaseCSSProperties;
  primary: BaseCSSProperties;
  info: BaseCSSProperties;
  success: BaseCSSProperties;
  warning: BaseCSSProperties;
  danger: BaseCSSProperties;
  rose: BaseCSSProperties;
  white: BaseCSSProperties;
  twitter: BaseCSSProperties;
  facebook: BaseCSSProperties;
  google: BaseCSSProperties;
  github: BaseCSSProperties;
  simple: BaseCSSProperties;
  transparent: BaseCSSProperties;
  disabled: BaseCSSProperties;
  lg: BaseCSSProperties;
  sm: BaseCSSProperties;
  round: BaseCSSProperties;
  block: BaseCSSProperties;
  link: BaseCSSProperties;
  justIcon: BaseCSSProperties;
}
type PropsClasses = Record<keyof StyleProps, string>;

const makeComponentStyles = makeStyles<Theme, StyleProps>(
  () => ({ ...buttonStyle } as any)
);

const RegularButton = React.forwardRef((props: RegularButtonProps, ref: any) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes: PropsClasses = makeComponentStyles({} as StyleProps);
  const btnClasses = classNames(className, {
    [classes.button]: true,
    [classes[size || 'sm']]: size,
    [classes[color || 'primary']]: color,
    [classes.round]: !!round,
    [classes.fullWidth]: !!fullWidth,
    [classes.disabled]: !!disabled,
    [classes.simple]: !!simple,
    [classes.block]: !!block,
    [classes.link]: !!link,
    [classes.justIcon]: !!justIcon
  });

  return (
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

type RegularButtonProps = {
  href?: string;
  target?: string;
  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose'
    | 'white'
    | 'facebook'
    | 'twitter'
    | 'google'
    | 'github'
    | 'transparent';
  size?: 'sm' | 'lg';
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (event?: any) => void
};

export default RegularButton;
