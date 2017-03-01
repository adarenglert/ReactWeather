var React = require('react');
var ReactDOM = require('react-dom');
var Main=require('Main');
var Weather=require('Weather');
var Examples=require('Examples');
var About=require('About');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
