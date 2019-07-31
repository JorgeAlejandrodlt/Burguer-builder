import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    {props.isAuthenticated? <NavigationItem link="/orders">Orders</NavigationItem>: null}
    {!props.isAuthenticated
    ? <NavigationItem link="/auth">Authenticate</NavigationItem>
    : <NavigationItem link="/logout">Authenticate</NavigationItem>}
  </ul>
);

export default navigationItems;