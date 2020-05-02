/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui core components
import { List, ListItem } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import styles from 'assets/jss/material-kit-react/components/footerStyle.js';

interface StyleProps {
  block: BaseCSSProperties;
  left: BaseCSSProperties;
  right: BaseCSSProperties;
  footer: BaseCSSProperties;
  a: BaseCSSProperties;
  footerWhiteFont: BaseCSSProperties;
  container: BaseCSSProperties;
  list: BaseCSSProperties;
  inlineBlock: BaseCSSProperties;
  icon: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);




export default function Footer(props: FooterProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={classes.block}>
                Heyra
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={classes.block}>
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/blog" className={classes.block}>
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/terms" className={classes.block}>
                Terms of Service
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/privacy" className={classes.block}>
                Privacy Policy
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          Copyright &copy; {1900 + new Date().getFullYear()} Heyra
        </div>
      </div>
    </footer>
  );
}

type FooterProps = {
  whiteFont: boolean
};
