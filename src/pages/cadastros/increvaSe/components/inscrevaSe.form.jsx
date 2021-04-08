import React, { Component } from 'react';
import Paypal from '~/components/paypal/paypal';
import Form from '~/components/form/form.component';
import autoBind from 'react-autobind';

class inscrevaSeForm extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { location } = this.props;
    return (
      <>
        <Form layout="vertical">
          <Paypal
            TorneioId={location.state.id}
            nameTorneio={location.state.title}
            dataTorneio={location.state.dataTorneio}
          />
        </Form>
      </>
    );
  }
}

export default inscrevaSeForm;
