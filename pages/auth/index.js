import React from 'react';
import User from '../../client/components/User';

const authIndexPage = () => {
  return (
    <div>
      <h1>Hello auth</h1>
      <User name="Alice" age="6" />
    </div>
  );
};

export default authIndexPage;
