import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import IssueComponent from './IssueComponent';
import GetNameComponent from './getNameComponent';
import BadgeComponent from './BadgeComponent';
import ProjectManagementSystemComponent from './ProjectManagementSystemComponent';
import * as serviceWorker from './serviceWorker';

var userInfo = {
  logoImg: "./yash-logo.png",
  name: "Sachin Gandhwani",
  userName: "Sachin"
}



ReactDOM.render(
  <React.StrictMode>
    <ProjectManagementSystemComponent></ProjectManagementSystemComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
