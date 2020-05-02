import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
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
import Parallax from 'components/Parallax/Parallax';
// // sections for this page
import HeaderLinks from 'components/Header/HeaderLinks';
import SectionBasics from './Sections/SectionBasics';
import SectionNavbars from './Sections/SectionNavbars';
import SectionTabs from './Sections/SectionTabs';
import SectionPills from './Sections/SectionPills';
import SectionNotifications from './Sections/SectionNotifications';
import SectionTypography from './Sections/SectionTypography';
import SectionJavascript from './Sections/SectionJavascript';
import SectionCarousel from './Sections/SectionCarousel';
import SectionCompletedExamples from './Sections/SectionCompletedExamples';
import SectionLogin from './Sections/SectionLogin';
import SectionExamples from './Sections/SectionExamples';
import SectionDownload from './Sections/SectionDownload';

import styles from 'assets/jss/material-kit-react/views/components.js';

interface StyleProps {
  container: BaseCSSProperties;
  brand: BaseCSSProperties;
  title: BaseCSSProperties;
  subtitle: BaseCSSProperties;
  main: BaseCSSProperties;
  mainRaised: BaseCSSProperties;
  link: BaseCSSProperties;
  textCenter: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function Components() {
  const classes: PropsClasses = useStyles({} as StyleProps);
  return (
    <div>
      <Header
        brand="Heyra"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
      />
      <Parallax image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Premium SMS service</h1>
                <h3 className={classes.subtitle}>
                  Send text messages blazing fast at an affordable price in more
                  than 200 countries.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
            <SectionTabs />
            <SectionPills />
            <SectionNotifications />
            <SectionTypography />
            <SectionJavascript />
            <SectionCarousel />
            <SectionCompletedExamples />
            <SectionLogin />
            <GridItem md={12} className={classes.textCenter}>
              <Link to={"/login-page"} className={classes.link}>
                <Button color="primary" size="lg" simple>
                  View Login Page
                </Button>
              </Link>
            </GridItem>
            <SectionExamples />
            <SectionDownload />
      </div>
      {/*<Footer />*/}
    </div>
  );
}
