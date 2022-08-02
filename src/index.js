import Post from "./post";
import '@styles/styles.css';
import '@styles/scss.scss';
// import json from './assets/json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from './assets/webpack-logo.png';

const post = new Post('Webpack title', WebpackLogo);
console.log('Post to String', post.toString());
// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);