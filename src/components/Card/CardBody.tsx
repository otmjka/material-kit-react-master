import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import styles from 'assets/jss/material-kit-react/components/cardBodyStyle.js';

interface StyleProps {
  cardBody: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function CardBody(props: CardBodyProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { className, children, ...rest } = props;
  const cardBodyClasses = classNames(className, {
    [classes.cardBody]: true
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

type CardBodyProps = {
  className?: string;
  children: React.ReactNode;
};
