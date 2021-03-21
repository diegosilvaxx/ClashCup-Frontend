import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Paypal from '~/components/paypal/paypal';
import { reduxForm } from 'redux-form';
import connect from '~/components/connect/connect';
import Form from '~/components/form/form.component';


class Pagamento extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { prefix } = this.props;
    return (
      <>
        <Form
          layout="vertical"
        >
          <Paypal/>
        </Form>
      </>
    );
  }
}

Pagamento = connect(Pagamento);
export default reduxForm({
  form: 'Pagamento', // a unique identifier for this form
})(Pagamento);
