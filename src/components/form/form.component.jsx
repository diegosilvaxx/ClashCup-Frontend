import React, { useEffect } from 'react';
import { Form } from 'antd';
import BindingForm from '~/helpers/bindingForm';
import connect from '~/components/connect/connect';

const FormComponent = props => {
  let fieldsBinding = BindingForm(props.state);

  const [form] = Form.useForm();

  useEffect(() => {
    fieldsBinding.forEach(data =>
      form.setFieldsValue({
        [data.name[1]]: data.value,
      })
    );
  }, [props.state]);

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
