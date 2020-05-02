import React from 'react';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import LinearProgress from '@material-ui/core/LinearProgress';
// core components
import styles from 'assets/jss/material-kit-react/components/customLinearProgressStyle.js';

interface StyleProps {
  root: BaseCSSProperties;
  bar: BaseCSSProperties;
  primary: BaseCSSProperties;
  warning: BaseCSSProperties;
  danger: BaseCSSProperties;
  success: BaseCSSProperties;
  info: BaseCSSProperties;
  rose: BaseCSSProperties;
  gray: BaseCSSProperties;
  primaryBackground: BaseCSSProperties;
  warningBackground: BaseCSSProperties;
  dangerBackground: BaseCSSProperties;
  successBackground: BaseCSSProperties;
  infoBackground: BaseCSSProperties;
  roseBackground: BaseCSSProperties;
  grayBackground: BaseCSSProperties;
  [key: string]: BaseCSSProperties;
}
type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function CustomLinearProgress(props: CustomLinearProgressProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { color = 'gray', ...rest } = props;
  const rootClasses = classes.root + ' ' + classes[color + 'Background'];
  const barClasses = classes.bar + ' ' + classes[color];
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: rootClasses,
        bar: barClasses
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: 'gray'
};

type CustomLinearProgressProps = {
  color?:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query' | undefined;
  value: number;
  style?: BaseCSSProperties;
};
