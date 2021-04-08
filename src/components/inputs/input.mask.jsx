import React, { Component } from 'react';
import autoBind from 'react-autobind';
import InputMask from 'react-input-mask';
class Container extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { children, onChange } = this.props;
    const { props } = children;
    if (props.isView) {
      return (
        <InputMask
          onChange={onChange}
          mask={children.props.mask}
          className="ant-input"
          maskChar={null}
          required={children.props.required}
          value={props.defaultValue || ''}
          disabled={props.isView}
        />
      );
    }
    return (
      <InputMask
        onChange={onChange}
        mask={children.props.mask}
        className="ant-input"
        maskChar={null}
        required={children.props.required}
        value={props.defaultValue || ''}
        disabled={props.isView}
      />
    );
  }
}

export default Container;
