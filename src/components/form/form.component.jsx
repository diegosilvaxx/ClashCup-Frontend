import React, { Component } from 'react';
import { Form } from 'antd';
import BindingForm from '~/helpers/bindingForm';
import connect from '~/components/connect/connect';

const FormComponent = props => {
  let fieldsBinding = BindingForm(props.state);

  const [form] = Form.useForm();

  fieldsBinding.forEach(data =>
    form.setFieldsValue({
      [data.name[1]]: data.value,
    })
  );

  return (
    <Form
      form={form}
      onValuesChange={props.onValuesChange}
      validateMessages={props.validateMessages}
      onFinish={props.onFinish}
      layout="vertical"
      fields={fieldsBinding}
    >
      {props.children}
    </Form>
  );
};

export default connect(FormComponent);
