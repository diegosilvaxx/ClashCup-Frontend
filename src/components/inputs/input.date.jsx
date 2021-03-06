import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { DatePicker } from 'antd';
import 'moment/locale/pt-br';
import locale from 'antd/es/date-picker/locale/pt_BR';
import connect from '~/components/connect/connect';
import { store } from '~/store';

class Container extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  async onChage(data, alldata) {
    const { action, name } = this.props;
    await store.dispatch(action.setState({ [name]: alldata }));
  }

  render() {
    const dateFormat = 'DD/MM/YYYY';
    const { name, label } = this.props;

    return <DatePicker name={name} label={label} format={dateFormat} locale={locale} onChange={this.onChage} />;
  }
}

export default connect(Container);
