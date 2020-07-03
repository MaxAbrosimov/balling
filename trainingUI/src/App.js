import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from './modules/';
import './styles.css';

const App = ({ children, location }) => (
  <div className="App">
    <NavBar path={location.pathname} />
    <div>
        {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default App;
