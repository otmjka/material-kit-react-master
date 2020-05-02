import React from 'react';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import SpeedIcon from '@material-ui/icons/Speed';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import InfoArea from 'components/InfoArea/InfoArea';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';

interface StyleProps {
  [key: string]: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function ProductSection() {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About our service</h2>
          <h5 className={classes.description}>
            With our SMS service you can send text messages with your company
            name as sender name. You can use our control panel to easily send
            text messages, or implement our API into your existing application.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Text messages"
              description="Send SMS to more than 200 countries, with custom sender name."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Blazing fast"
              description="Messages are delivered at a premium speed, near instantly."
              icon={SpeedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="High secuirty"
              description="Strong secuirty is our highest priority, therefore we among other measures use military grade encryption."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
