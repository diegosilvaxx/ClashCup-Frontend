import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import autoBind from 'react-autobind';

class Container extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async confirm(action) {
    action();
  }

  cancel(e) {}

  render() {
    const { title, onConfirm, onCancel, okText, cancelText, button } = this.props;

    return (
      <Popconfirm
        title={title}
        onConfirm={() => this.confirm(onConfirm)}
        onCancel={onCancel || this.cancel}
        okText={okText}
        cancelText={cancelText}
      >
        {button}
      </Popconfirm>
    );
  }
}

export default Container;
