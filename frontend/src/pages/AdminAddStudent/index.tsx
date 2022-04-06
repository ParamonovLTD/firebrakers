import { MainContainerLandingPage } from '../../shared/GlobalStyles';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';
import React from 'react';
import { RegisterTitle } from './styles';
import RegisterForm, { RegisterValues } from '../../shared/components/RegisterForm';
import { register } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const AdminAddStudent = () => {
  const dispatch = useDispatch()

  const onCreate = (values: RegisterValues) => {
    dispatch(register(values))
  };

  return (
    <MainContainerLandingPage>
      <RegisterTitle level={2}>Регистрация студента</RegisterTitle>
      <FullwidthUnderline marginBottom={50} />
      <RegisterForm onCreate={onCreate} />
    </MainContainerLandingPage>
  );
};

export default AdminAddStudent;