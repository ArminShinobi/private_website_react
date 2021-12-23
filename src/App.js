import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React from "react";
import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
Amplify.configure(config)

function App() {
    return (
        <div className="app">
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="col-lg-12">
                        <div className="text-center">
                        <h1>Hello, I'm Armin</h1>
                        <p>I'm a Software Engineer</p>
                        </div>
                    </div>
                </div>
        </div>);
}

export default App;
