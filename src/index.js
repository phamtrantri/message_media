import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/grid.css';
import App from './components/App';
import ImageDetail from './components/ImageDetail';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App}> </IndexRoute>
    </Route>
    <Route path="/image/:id" component={ImageDetail}></Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
