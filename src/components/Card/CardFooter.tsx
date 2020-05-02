import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import styles from 'assets/jss/material-kit-react/components/cardFooterStyle.js';

interface StyleProps {
  cardFooter: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function CardFooter(props: CardFooterProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { className, children, ...rest } = props;
  const cardFooterClasses = classNames(className, {
    [classes.cardFooter]: true
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

type CardFooterProps = {
  className?: string;
  children: React.ReactNode;
};
