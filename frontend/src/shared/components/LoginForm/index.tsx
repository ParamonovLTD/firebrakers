import React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormSubmitItem, LoginModal, StyledLoginForm } from './styles';

export interface LoginValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  visible: boolean;
  onCreate: (values: LoginValues) => void;
  onCancel: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();

  return (
    <LoginModal
      visible={visible}
      title='Войти на сайт'
      onCancel={onCancel}
      footer={'*Данные для авторизации предоставляет Учебный пункт 2 пожарно-спасательный отряд ФПС ГПС главного управления МЧС России по Ростовской области'}
    >
      <StyledLoginForm
        form={form}
        layout="vertical"
        name="login"
        onFinish={() => {
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