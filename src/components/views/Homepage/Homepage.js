import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Surname } from '../../../images/surname.svg';
import clsx from 'clsx';
import { Button } from '../../common/Button/Button';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const elipses = [
  'https://i.postimg.cc/QMM8xdkp/Ellipse-3.png',
  'https://i.postimg.cc/Y9GtYDP0/Ellipse-4.png',
  'https://i.postimg.cc/wBb6tY0n/Ellipse-5.png',
];

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    {elipses.map((el, i) => (
      <img key={i} className={styles.elipse} src={el} alt={`elipse-${i}`}/>
    ))}
    <div className={styles.name}>
      <h1>Bartosz</h1>
      <div className={styles.surname}>
        <Surname />
      </div>
    </div>
    <h3>junior web developer</h3>
    <div className={styles.buttons}>
      <Button variant='outline'>
        
        <i class="fab fa-linkedin"></i>
        LinkedIn
      </Button>
      <Button variant='outline'>
        <i class="fab fa-github-square"></i>
        GitHub
      </Button>
    </div>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
