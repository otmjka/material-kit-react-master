import React from 'react';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
// core components
import styles from 'assets/jss/material-kit-react/components/typographyStyle.js';

interface StyleProps {
  [key: string]: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function Warning(props: WarningProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + ' ' + classes.warningText}>
      {children}
    </div>
  );
}

type WarningProps = {
  children: React.ReactNode
};
