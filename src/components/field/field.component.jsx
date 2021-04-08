import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Field } from 'redux-form';
import { Form, Input, Radio, Select, Checkbox, DatePicker } from 'antd';
import InputMask from '~/components/inputs/input.mask';
import connect from '~/components/connect/connect';
import InputDate from '~/components/inputs/input.date';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const makeField = Component => ({
  input,
  meta,
  children,
  hasFeedback,
  type,
  value,
  rules,
  nameArray,
  label,
  mask,
  disabled,
  onChange,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  switch (type) {
    case 'ATextarea':
      return (
        <FormItem
          rules={rules}
          name={nameArray || input.name}
          label={label}
          validateStatus={hasError ? 'error' : 'success'}
          hasFeedback={hasFeedback && hasError}
          help={hasError && meta.error}
        >
          <Component
            disabled={disabled}
            autoSize={{ minRows: 2, maxRows: 8 }}
            {...input}
            {...rest}
            children={children}
          />
        </FormItem>
      );
      break;
    case 'AInputMask':
      return (
        <FormItem
          rules={rules}
          name={nameArray || input.name}
          label={label}
          validateStatus={hasError ? 'error' : 'success'}
          hasFeedback={hasFeedback && hasError}
          help={hasError && meta.error}
        >
          <Component disabled={disabled} label={label} {...input} {...rest} children={children} />
        </FormItem>
      );
      break;

    default:
      return (
        <FormItem
          rules={rules}
          name={nameArray || input.name}
          label={label}
          validateStatus={hasError ? 'error' : 'success'}
          hasFeedback={hasFeedback && hasError}
          help={hasError && meta.error}
        >
          {children}
        </FormItem>
      );
      break;
  }
};

const AInput = makeField(Input);
const ARadioGroup = makeField(RadioGroup);
const ASelect = makeField(Select);
const ACheckbox = makeField(Checkbox);
const ATextarea = makeField(TextArea);
const ARangePicker = makeField(RangePicker);
const ADatePicker = makeField(InputDate);
const AInputMask = makeField(InputMask);

class FieldComponent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const {
      label,
      name,
      nameArray,
      placeholder,
      hasFeedback,
      type,
      children,
      rules,
      onChange,
      disabled,
      defaultValue,
      isView,
    } = this.props;

    switch (type) {
      case 'AInput':
        return (
          <Field
            onChange={onChange}
            label={label}
            rules={rules}
            name={name}
            children={children}
            nameArray={nameArray}
            component={AInput}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            disabled={disabled}
            required={rules ? rules.find(x => x.required == true) : rules}
            disabled={isView}
          />
        );
        break;
      case 'ARadioGroup':
        return (
          <Field
            onChange={onChange}
            rules={rules}
            label={label}
            name={name}
            children={children}
            component={ARadioGroup}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            required={rules ? rules.find(x => x.required == true) : rules}
            disabled={isView}
          />
        );
        break;
      case 'ASelect':
        return (
          <Field
            onChange={onChange}
            rules={rules}
            label={label}
            name={name}
            children={children}
            component={ASelect}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            required={rules ? rules.find(x => x.required == true) : rules}
            disabled={isView}
          />
        );
        break;
      case 'ACheckbox':
        return (
          <Field
            onChange={onChange}
            rules={rules}
            label={label}
            name={name}
            children={children}
            component={ACheckbox}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            required={rules ? rules.find(x => x.required == true) : rules}
            disabled={isView}
          />
        );
        break;
      case 'ATextarea':
        return (
          <Field
            onChange={onChange}
            type={'ATextarea'}
            rules={rules}
            label={label}
            name={name}
            children={children}
            component={ATextarea}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            required={rules ? rules.find(x => x.required == true) : rules}
            disabled={isView}
          />
        );
        break;
      case 'ARangePicker':
        return (
          <Field
            onChange={onChange}
            rules={rules}
            label={label}
            name={name}
            children={children}
            component={ARangePicker}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            required={rules ? rules.find(x => x.required == true) : rules}
            disabled={isView}
          />
        );
        break;
      case 'ADatePicker':
        return (
          <Field
            onChange={onChange}
            rules={rules}
            label={label}
            name={name}
            children={children}
            component={ADatePicker}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            required={rules ? rules.find(x => x.required == true) : rules}
            disabled={isView}
          />
        );
        break;
      case 'AInputMask':
        return (
          <Field
            onChange={onChange}
            rules={rules}
            label={label}
            name={name}
            children={children}
            component={AInputMask}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            nameArray={nameArray}
            type={type}
            required={rules ? rules.find(x => x.required == true) : rules}
          />
        );
        break;

      default:
        return (
          <Field
            onChange={onChange}
            rules={rules}
            children={children}
            label={label}
            name={name}
            component={AInput}
            placeholder={placeholder}
            hasFeedback={hasFeedback}
            required={rules ? rules.find(x => x.required == true) : rules}
            disabled={isView}
          />
        );
        break;
    }
  }
}

export default connect(FieldComponent);
