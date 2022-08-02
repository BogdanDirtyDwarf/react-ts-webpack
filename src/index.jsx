import Post from "./post";
import '@styles/styles.css';
import '@styles/scss.scss';
// import json from './assets/json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from './assets/webpack-logo.png';
import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack title', WebpackLogo);
console.log('Post to String', post.toString());
// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);

const App = () => (
    <div className="container">
        <h1>Webpack course</h1>
        <hr />
        <div className="logo"></div>
        <div className="box">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('App'))
