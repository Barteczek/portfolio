import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../../common/Button/Button';

const logo = 'https://i.postimg.cc/mgj275bN/logo.png';
const nav = ['home', 'about me', 'skills', 'projects'];

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <NavLink to='/' className={styles.logo}>
      <img src={logo} alt='logo'/>
    </NavLink>
    <nav>
      {nav.map((name, index) => (
        <NavLink
          key={index}
          to={`/${name}`}
          activeClassName={styles.selected}
          className={styles.navLink}
        >
          {name}
        </NavLink>
      ))}
    </nav>
    <Button variant='main'>Contact Me</Button>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
