import React from 'react';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import Grid from '@material-ui/core/Grid';

const styles: StyleProps = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto'
  }
};

interface StyleProps {
  grid: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function GridContainer(props: GridContainerProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ''
};

type GridContainerProps = {
  children: React.ReactNode;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  className?: string;
};
