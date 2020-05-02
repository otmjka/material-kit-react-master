import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';

// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import styles from 'assets/jss/material-kit-react/components/navPillsStyle.js';

interface StyleProps {
  [key: string]: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function NavPills(props: NavPillsProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event: any, active: number) => {
    setActive(active);
  };
  const handleChangeIndex = (index: number) => {
    setActive(index);
  };
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop: { tabIcon?: any; tabButton?: any }, key) => {
        var icon: { icon?: any } = {};
        if (prop.tabIcon !== undefined) {
          // const Comp: React.ReactNode = (<prop.tabIcon/> as React.ReactNode)
          icon['icon'] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === 'rtl' ? 'x-reverse' : 'x'}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop, key) => {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: 'primary'
};

type Tab = {
  tabButton: string;
  tabIcon: object;
  tabContent: React.ReactNode;
};

type Horizontal = {
  tabsGrid: object;
  contentGrid: object;
};

type NavPillsProps = {
  // index of the default active pill
  active: number;
  tabs: Tab[];
  color?: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose';
  direction?: string;
  horizontal?: Horizontal;
  alignCenter?: boolean;
};
