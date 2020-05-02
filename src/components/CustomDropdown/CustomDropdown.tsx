import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Popper from '@material-ui/core/Popper';

// core components
import Button from 'components/CustomButtons/Button';

import styles from 'assets/jss/material-kit-react/components/customDropdownStyle.js';

interface StyleProps {
  popperClose: BaseCSSProperties;
  dropdown: BaseCSSProperties;
  menuList: BaseCSSProperties;
  popperResponsive: BaseCSSProperties;
  dropdownItem: BaseCSSProperties;
  blackHover: BaseCSSProperties;
  primaryHover: BaseCSSProperties;
  infoHover: BaseCSSProperties;
  successHover: BaseCSSProperties;
  warningHover: BaseCSSProperties;
  dangerHover: BaseCSSProperties;
  roseHover: BaseCSSProperties;
  dropdownItemRTL: BaseCSSProperties;
  dropdownDividerItem: BaseCSSProperties;
  buttonIcon: BaseCSSProperties;
  caret: BaseCSSProperties;
  caretActive: BaseCSSProperties;
  caretRTL: BaseCSSProperties;
  dropdownHeader: BaseCSSProperties;
  noLiPadding: BaseCSSProperties;
  [key: string]: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function CustomDropdown(props: CustomDropdownProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: React.MouseEvent) => {
    if (anchorEl !== null && anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (param: any) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding
  } = props;
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + 'Hover']]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });
  let icon = null;
  switch (typeof buttonIcon) {
    case 'object':
      icon = <props.buttonIcon className={classes.buttonIcon} />;
      break;
    case 'string':
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? 'menu-list' : null}
          aria-haspopup="true"
          {...buttonProps}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? 'top-start'
              : 'top'
            : left
            ? 'bottom-start'
            : 'bottom'
        }
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            style={
              dropup
                ? { transformOrigin: '0 100% 0' }
                : { transformOrigin: '0 0 0' }
            }
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={classes.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      className={classes.dropdownHeader}
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map((prop, key) => {
                    if (typeof prop === 'object' && prop.divider) {
                      return (
                        <Divider
                          key={key}
                          onClick={() => handleClose('divider')}
                          className={classes.dropdownDividerItem}
                        />
                      );
                    }
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => handleClose(prop)}
                        className={dropdownItem}
                      >
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary'
};

// type DropdownListItem = {
//   divider?: boolean;
// } | string;

type CustomDropdownProps = {
  hoverColor:
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose';
  plainTabs?: any;
  buttonText?: React.ReactNode;
  buttonIcon?: any; // PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dropdownList: (string | { divider: true; })[];
  buttonProps: object;
  dropup?: boolean;
  dropdownHeader: React.ReactNode;
  rtlActive?: boolean;
  caret: boolean;
  left?: boolean;
  noLiPadding?: boolean;
  // function that retuns the selected item
  onClick?: (event?: any) => void;
};
