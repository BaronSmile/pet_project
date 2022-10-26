import React from 'react';
import moment from 'moment';
import {Button, DatePicker, Form, Row, Select, Radio} from 'antd';

const {Option} = Select;

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const GameForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const dateFormat = {
        ...values,
        "game_date": moment(values["game_date"]).format("DD.MM.YYYY")
    }
    console.log(dateFormat);
    form.resetFields()
  };

  const gameMode = [
    'Ranked All Pick',
    'All Pick',
    'Single Draft',
    'Turbo',
    'All Random',
    'Ability Draft'
  ]

  return (
    <Row justify="center" style={{minHeight: '100vh', marginTop: '2em'}}>
      <Form {...layout} onFinish={onFinish} validateMessages={validateMessages} className={'gameForm'} form={form}>
        <Form.Item name='game_date' label="Date"
        >
          <DatePicker placeholder='Дата' format="DD.MM.YYYY"/>
        </Form.Item>
        <Form.Item name='hero' label="Hero" rules={[{required: true}]}>
          <Select
            placeholder="Выберите героя"
            allowClear
          >
            <Option value="axe">Axe</Option>
            <Option value="lina">Lina</Option>
            <Option value="razor">Razor</Option>
          </Select>
        </Form.Item>
        <Form.Item name='team' label="Team Mode">
          <Radio.Group>
            <Radio value="radiant"> Свет </Radio>
            <Radio value="dire"> Тьма </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name='game_mode' label="Game mode">
          <Select
            placeholder="Выберите режим игры"
            allowClear
          >
            {gameMode.map(mode=>(
              <Option key={mode} value={mode}>{mode}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name='result' label="Result">
          <Radio.Group>
            <Radio value="win"> Win </Radio>
            <Radio value="loss"> Loss </Radio>
          </Radio.Group>
        </Form.Item>

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
