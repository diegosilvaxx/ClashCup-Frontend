import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import DarkLayout from '../pages/_layouts/dark';
import DefaultLayout from '../pages/_layouts/default';
import * as breadcrumbActionCreators from '~/store/modules/breadcrumb/breadcrumb.actions';
import { store } from '~/store';
import LayoutRoute from './layout.route';

class RouteWrapper extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    const { signed } = store.getState().auth;
    if (signed) {
      store.dispatch(breadcrumbActionCreators.setState(this.props.breadcrumb));
    }
  }

  render() {
    const { signed } = store.getState().auth;
    const Layout = signed ? DefaultLayout : DarkLayout;
    const Component = this.props.component;

    if (!signed) {
      return (
        <>
          <Route>
            <Layout>
              <Component location={this.props.location} />
            </Layout>
          </Route>
        </>
      );
    }

    if (signed && !this.props.isPrivate) {
      return <Redirect to="/torneio" />;
    }

    return (
      <>
        <LayoutRoute>
          <Layout>
            <Component isPrivate exact location={this.props.location} />
          </Layout>
        </LayoutRoute>
      </>
    );
  }
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
