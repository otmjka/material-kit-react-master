import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// core components
import styles from 'assets/jss/material-kit-react/components/headerStyle.js';

import LogoImg from 'assets/img/logo/logo3.png';

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function Header(props: HeaderProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (changeColorOnScroll && windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color || 'primary']);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color || 'primary']);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll ? changeColorOnScroll.color : 'primary']);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color || 'primary']]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  //<img alt="Logo" height="60px" src={LogoImg}></img>
  const brandComponent = (
    <Button href="/" className={classes.title}>
      {brand}
    </Button>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: 'white'
};

type ChangeColorOnScroll = {
  height: number,
  color:
    'primary' |
    'info' |
    'success' |
    'warning' |
    'danger' |
    'transparent' |
    'white' |
    'rose' |
    'dark';
}

type HeaderProps = {
  color?:
    'primary' |
    'info' |
    'success' |
    'warning' |
    'danger' |
    'transparent' |
    'white' |
    'rose' |
    'dark';
  rightLinks?: React.ReactNode;
  leftLinks?: React.ReactNode;
  brand: string;
  fixed?: boolean;
  absolute?: boolean;
  routes?: any[];
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll?: ChangeColorOnScroll
};

interface StyleProps {
  appBar: BaseCSSProperties;
  absolute: BaseCSSProperties;
  fixed: BaseCSSProperties;
  container: BaseCSSProperties;
  flex: BaseCSSProperties;
  title: BaseCSSProperties;
  appResponsive: BaseCSSProperties;
  primary: BaseCSSProperties;
  info: BaseCSSProperties;
  success: BaseCSSProperties;
  warning: BaseCSSProperties;
  danger: BaseCSSProperties;
  rose: BaseCSSProperties;
  transparent: BaseCSSProperties;
  dark: BaseCSSProperties;
  white: BaseCSSProperties;
  drawerPaper: BaseCSSProperties;
}
