import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormSubmitItem, LoginModal, StyledLoginForm } from './styles';

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
    <LoginModal
      visible={visible}
      title='Войти на сайт'
      footer={'*Данные для авторизации предоставляет Учебный пункт 2 пожарно-спасательный отряд ФПС ГПС главного управления МЧС России по Ростовской области'}
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
      <StyledLoginForm
        form={form}
        layout="vertical"
        name="login"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Пожалуйста, введите e-mail!', type: 'email' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="E-mail" />
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
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
        <FormSubmitItem>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </FormSubmitItem>
      </StyledLoginForm>
    </LoginModal>
  );
};

export default LoginForm;