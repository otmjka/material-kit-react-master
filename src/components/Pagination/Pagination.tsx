import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import Button from '@material-ui/core/Button';

import styles from 'assets/jss/material-kit-react/components/paginationStyle.js';

interface StyleProps {
  pagination: BaseCSSProperties;
  paginationItem: BaseCSSProperties;
  paginationLink: BaseCSSProperties;
  primary: BaseCSSProperties;
  success: BaseCSSProperties;
  danger: BaseCSSProperties;
  disabled: BaseCSSProperties;
  [key: string]: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function Pagination(props: PaginationProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { pages, color = 'primary' } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: 'primary'
};

type PageProps = {
  active?: boolean;
  disabled?: boolean;
  text: number | 'PREV' | 'NEXT' | '...';
  onClick?: () => void;
};
type PaginationProps = {
  pages: PageProps[];
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
};
