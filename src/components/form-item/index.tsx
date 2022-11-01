import React from 'react';
// import moment from 'moment';
import {DatePicker, Form, Radio, Select} from "antd";

interface FormProps {
  field: {
    field_id: string,
    field_label: string,
    field_type: string,
    field_placeholder?: string,
    field_data?: any[],
    field_required?: {}
  }
}

const {Option} = Select;

const FormItem: React.FC<FormProps> = (
  {
    field:
      {
        field_id,
        field_label,
        field_type,
        field_placeholder,
        field_data,
        field_required
      }
  }) => {

  switch (field_type) {
    case 'date':
      return (
        <Form.Item
          name={field_id}
          label={field_label}
          // initialValue={moment()}
          rules={[field_required]}
          hasFeedback
        >
          <DatePicker
            style={{width: '100%'}}
            placeholder={field_placeholder}
            format="DD.MM.YYYY"
          />
        </Form.Item>
      )
    case 'select':
      return (
        <Form.Item
          name={field_id}
          label={field_label}
          // initialValue={field_data[0]}
          rules={[field_required]}
          hasFeedback
        >
          <Select
            placeholder={field_placeholder}
            allowClear
          >
            {field_data.map(el => <Option key={el} value={el}>{el}</Option>)}
          </Select>
        </Form.Item>
      )
    case 'radio':
      return (
        <Form.Item
          name={field_id}
          label={field_label}
          // initialValue={field_data[0].value}
          rules={[field_required]}
        >
          <Radio.Group>
            {field_data.map(el => <Radio key={el.value} value={el.value}> {el.text} </Radio>)}
          </Radio.Group>
        </Form.Item>
      )
    default:
      return null;
  }

};

export default FormItem;