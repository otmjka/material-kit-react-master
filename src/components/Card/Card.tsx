import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import styles from 'assets/jss/material-kit-react/components/cardStyle.js';

interface StyleProps {
  card: BaseCSSProperties;
  cardPlain: BaseCSSProperties;
  cardCarousel: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function Card(props: CardProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames(className,{
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

type CardProps = {
  className?: string;
  plain?: boolean;
  carousel?: boolean;
  children: React.ReactNode;
};
