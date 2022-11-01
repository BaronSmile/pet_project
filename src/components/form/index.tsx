import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {Button, Form, Row, Typography} from 'antd';
import FormItem from '../form-item';

const formJSON = require('../../formElement.json');

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 10},
};

const GameForm = () => {
  const [form] = Form.useForm();
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(formJSON[0])
  }, []);

  const {fields,page_label} = elements ?? {};

  const onFinish = (values: any) => {
    const dateFormat = {
      ...values,
      "game_date": moment(values["game_date"]).format("DD.MM.YYYY")
    }
    form.resetFields()
    console.log('Form:', dateFormat)
  };

  return (
    <Row justify="center" className="form-row">
      <Form {...layout} onFinish={onFinish} form={form}>
        <Form.Item wrapperCol={{span:24}} className='form-title'>
          <Typography.Title level={2} type={'secondary'}>{page_label}</Typography.Title>
        </Form.Item>
        {
          fields ? fields.map((field, i) => (<FormItem key={i} field={field}/>)) : null
        }
        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default GameForm;
