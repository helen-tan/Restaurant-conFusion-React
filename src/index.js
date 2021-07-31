import React from 'react';
import ReactDOM from 'react-dom'; //Import Bootstrap CSS from node modules folder where Bootstrap is downloaded, to make use of Bootstrap in our app. Must import custom css after Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
