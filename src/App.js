import chairBackgroundImg from './img/background/chair_background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React from 'react';
import Amplify from '@aws-amplify/core';
import config from '../src/aws-exports';
import CookieBot from 'react-cookiebot';

Amplify.configure(config);

function App() {
  return (
    <div className="background-img" style={{ backgroundImage: `url(${chairBackgroundImg})` }}>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="col-lg-12 text-center">
          <h1>Hello, I&apos;m Armin</h1>
          <p>I&apos;m a Software Engineer</p>
        </div>
      </div>
      <CookieBot domainGroupId="9173d89d-ac89-4143-82cf-039b0974fdd7" />
    </div>
  );
}

export default App;
