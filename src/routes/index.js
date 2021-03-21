import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Switch } from 'react-router-dom';
import Route from './route';
import RoutesGlobal from './route.componet';

class Routes extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <Switch>
        {RoutesGlobal.map((route, i) => (
          <Route
            path={route.path}
            component={props => <route.component {...props} routes={route.routes} />}
            isPrivate={route.isPrivate}
            exact={route.exact}
            breadcrumb={route.breadcrumb}
            key={i}
          />
        ))}
      </Switch>
    );
  }
}
export default Routes;
