import React from "react";
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

interface StyleProps {
  section: BaseCSSProperties;
  title: BaseCSSProperties;
  container: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function SectionNotifications() {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Notifications</h3>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> You{"'"}ve got some friends nearby, stop looking
            at your phone and find them...
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <SnackbarContent
        message={
          <span>
            <b>WARNING ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="warning"
        icon={Warning}
      />
      <SnackbarContent
        message={
          <span>
            <b>DANGER ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="danger"
        icon="info_outline"
      />
      <Clearfix />
    </div>
  );
}
