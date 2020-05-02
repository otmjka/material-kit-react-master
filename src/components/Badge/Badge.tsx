import React from 'react';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import styles from 'assets/jss/material-kit-react/components/badgeStyle.js';

interface StyleProps {
  badge: BaseCSSProperties;
  primary: BaseCSSProperties;
  warning: BaseCSSProperties;
  danger: BaseCSSProperties;
  success: BaseCSSProperties;
  info: BaseCSSProperties;
  rose: BaseCSSProperties;
  gray: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function Badge(props: BadgeProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { color = 'primary', children } = props;
  return (
    <span className={classes.badge + ' ' + classes[color]}>{children}</span>
  );
}

Badge.defaultProps = {
  color: 'gray'
};

type BadgeProps = {
  color?:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';
  children: React.ReactNode;
};
