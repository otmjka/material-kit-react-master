import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/Parallax/Parallax';

import styles from 'assets/jss/material-kit-react/views/landingPage';

// Sections for this page
import ProductSection from './Sections/ProductSection';
import TeamSection from './Sections/TeamSection';
import WorkSection from './Sections/WorkSection';

const dashboardRoutes = [];

interface StyleProps {
  [key: string]: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function LandingPage(props) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Heyra"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <Parallax filter image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Premium SMS service</h1>
              <h4>
                Send text messages blazing fast at an affordable price in more
                than 200 countries. Easily send SMS using our control panel or
                API.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
