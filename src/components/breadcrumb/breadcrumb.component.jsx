import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import autoBind from 'react-autobind';
import { store } from '~/store';
import { connect } from 'react-redux';
import * as breadcrumbActionCreators from '~/store/modules/breadcrumb/breadcrumb.actions';

class breadcrumb extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { breadcrumb } = store.getState().breadcrumb;
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    breadcrumb: state.breadcrumb,
  };
};

const mapDispatchToProps = {
  breadcrumbActionCreators,
};

export default connect(mapStateToProps, mapDispatchToProps)(breadcrumb);
