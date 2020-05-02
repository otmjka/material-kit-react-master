import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import styles from 'assets/jss/material-kit-react/components/cardHeaderStyle.js';

interface StyleProps {
  cardHeader: BaseCSSProperties;
  cardHeaderPlain: BaseCSSProperties;
  warningCardHeader: BaseCSSProperties;
  successCardHeader: BaseCSSProperties;
  dangerCardHeader: BaseCSSProperties;
  infoCardHeader: BaseCSSProperties;
  primaryCardHeader: BaseCSSProperties;
  [key: string]: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function CardHeader(props: CardHeaderProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { className, children, color = 'primary', plain, ...rest } = props;
  const cardHeaderClasses = classNames(className, {
    [classes.cardHeader]: true,
    [classes[color + 'CardHeader']]: color,
    [classes.cardHeaderPlain]: plain
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

type CardHeaderProps = {
  className?: string;
  color: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';
  plain?: boolean;
  children: React.ReactNode;
};
