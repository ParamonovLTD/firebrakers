import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export interface LoginValues {
  username: string;
  password: string;
  isRemember: boolean;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: LoginValues) => void;
  onCancel: () => void;
}

const LoginForm: React.FC<CollectionCreateFormProps> = ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      footer={null}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="login"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Логин" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginForm;