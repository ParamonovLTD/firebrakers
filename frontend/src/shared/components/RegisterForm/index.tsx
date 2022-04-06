import React from 'react';
import { Button, Form, Input } from 'antd';
import { FormSubmitItem } from '../LoginForm/styles';
import { RegisterFormWrapper, StyledRegisterForm } from './styles';

export interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

interface RegisterFormProps {
  onCreate: (values: RegisterValues) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onCreate }) => {
  const [form] = Form.useForm();

  return (
    <RegisterFormWrapper>
      <StyledRegisterForm
        form={form}
        labelCol={{ lg: {span: 3, offset: 2}, md: {span: 4, offset: 2}, sm: {offset: 1}, xs: {span: 6, offset: 0} }}
        wrapperCol={{ lg: {span: 17, offset: 0}, md: {span: 16, offset: 1}, xs: {span: 14, offset: 0} }}
        name="register"
        onFinish={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Register Failed:', info);
            });
        }}
      >
        <Form.Item
          name="name"
          label='ФИО'
          rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label='Email'
          rules={[{ required: true, message: 'Пожалуйста, введите e-mail!', type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label='Пароль'
          rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
        >
          <Input type="password" />
        </Form.Item>
        <FormSubmitItem wrapperCol={{ md: {offset: 4, span: 16}, xs: {span: 24, offset: 0} }}>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </FormSubmitItem>
      </StyledRegisterForm>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;