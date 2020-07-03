import React from 'react';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import './styles.css';

const Page404 = () => (
  <div className="Not-Found">
    <h1>Page not found 404</h1>
    <Button onClick={() => browserHistory.push('/')}>Comeback Home</Button>
  </div>
);

export default Page404;
