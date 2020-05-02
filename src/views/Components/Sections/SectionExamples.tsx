import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

import landing from 'assets/img/landing.jpg';
import profile from 'assets/img/profile.jpg';

import styles from 'assets/jss/material-kit-react/views/componentsSections/exampleStyle.js';

interface StyleProps {
  section: BaseCSSProperties;
  container: BaseCSSProperties;
  link: BaseCSSProperties;
  imgFluid: BaseCSSProperties;
  imgRounded: BaseCSSProperties;
  imgRoundedCircle: BaseCSSProperties;
  imgRaised: BaseCSSProperties;
  imgGallery: BaseCSSProperties;
  imgCardTop: BaseCSSProperties;
  imgCardBottom: BaseCSSProperties;
  imgCard: BaseCSSProperties;
  imgCardOverlay: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function SectionExamples() {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Link to="landing-page" className={classes.link}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View landing page
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  ' ' +
                  classes.imgRounded +
                  ' ' +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View profile page
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
