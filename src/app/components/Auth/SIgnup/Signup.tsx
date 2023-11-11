import React, { useState } from 'react';
import { AppModal } from '../../Modals/Modals';
import { VoidCallback } from '@/utils/types';
import Assets from '@/constants/assets.constant';
import { AppButton, AuthButton } from '../../Buttons/Buttons';
import TextField from '../../Fields/TextField';
import { isEmpty, signupValidationSchema } from '@/helpers';
import useRequest from '@/services/request/request.service';
import { useDispatch } from 'react-redux';
import API from '@/constants/api.constant';
import { profileLoginAction, profileUpdateAction } from '@/store/profile.slice';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { FadeIn } from '../../Transitions/Transitions';

const SignupModal = ({
  open,
  onClose,
  handleLoginModalOpen,
  next,
}: {
  open: boolean;
  onClose: () => void;
  handleLoginModalOpen: VoidCallback;
  next: VoidCallback;
}) => {
  const { makeRequest, isLoading, data } = useRequest();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (values) => {
    makeRequest({
      url: API.signup,
      data: values,
      method: 'POST',
    })
      .then((res) => {
        const { status, data }: any = res.data;

        dispatch(profileLoginAction(data));
        onClose();
        next();
        // navigate(`/auth/verification?code=${data.code}`);

        // setOpenSnackBar(true);
        // setTimeout(() => {
        //   openSnackBar && navigate(`/auth/verification?code=${data.code}`);
        // }, 3000);
      })
      .catch((error: AxiosError) => {
        const res: any = error?.response;

        const status = res?.status;
        const data = res?.data;

        if (status === 406) {
          toast.error(data.message);
        } else if (status === 400) {
          setErrors(data.data);
        } else {
          toast.error('Something went wrong! Pls try again!', {});
        }
      });
  };

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const { values, handleSubmit, handleChange, errors, setErrors, getFieldProps } = useFormik({
    initialValues: form,
    validationSchema: signupValidationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit,
  });

  const { email, password, confirmPassword } = values;

  const iDisabled = isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword) || Object.keys(errors).length > 0;

  return (
    <AppModal
      open={open}
      handleClose={onClose}
      style={{
        backgroundColor: '#fff',
        padding: '40px 50px 30px 50px',
        position: 'relative',
        height: '80vh',
        overflowY: 'auto',
        width: '600px',
      }}
    >
      <form className="w-full" onSubmit={handleSubmit}>
        <h1 className="text-[#101828] font-[700] text-[1.4vw] text-center">Create Account</h1>
        <div className="w-full flex items-center space-x-7 mt-7">
          <AuthButton text="Continue with Facebook" icon={Assets.facebookAuth} />
          <AuthButton text="Continue with Google" icon={Assets.googleAuth} />
        </div>
        <div className="flex items-center my-7">
          <div className="border border-[#EAECF0] w-full" />
          <p className="text-[#98A2B3] text-[1vw] font-[500] px-3">OR</p>
          <div className="border border-[#EAECF0] w-full" />
        </div>

        <div className="space-y-5 mt-7 w-full">
          <TextField
            id="firstName"
            type="text"
            label="First Name *"
            placeholder="Enter your first name"
            withBackground={false}
            error={errors.firstname}
            {...getFieldProps('firstName')}
          />
          <TextField
            id="lastName"
            type="text"
            label="Last Name *"
            placeholder="Enter your last name"
            obscured={false}
            withBackground={false}
            readOnly={false}
            error={errors.lastname}
            {...getFieldProps('lastName')}
          />
          <TextField
            id="email"
            type="email"
            label="Email *"
            placeholder="Enter your email address"
            withBackground={false}
            readOnly={false}
            error={errors.email}
            {...getFieldProps('email')}
          />

          <TextField
            id="phone"
            type="text"
            label="Phone *"
            placeholder="Enter your phone"
            withBackground={false}
            readOnly={false}
            error={errors.phone}
            {...getFieldProps('phone')}
          />
          <TextField
            id="password"
            type="password"
            label="Password *"
            placeholder="Enter password"
            obscured={true}
            withBackground={false}
            readOnly={false}
            error={errors.password}
            {...getFieldProps('password')}
          />
          {values.password.length > 7 && (
            <>
              <FadeIn fullWidth={true}>
                <TextField
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password *"
                  placeholder="Enter Confirm Password"
                  obscured={true}
                  withBackground={false}
                  readOnly={false}
                  error={errors.confirmPassword}
                  {...getFieldProps('confirmPassword')}
                />
              </FadeIn>
            </>
          )}

          <div className="mt-10">
            <AppButton fullWidth={true} boldText={false} loading={isLoading} disabled={iDisabled} type="submit">
              Sign-up
            </AppButton>
          </div>
        </div>

        <p className="mt-10 text-[#101828] font-[700] text-[1vw] text-center">
          Already have an account?{' '}
          <span className="text-[#415EFF] cursor-pointer" onClick={handleLoginModalOpen}>
            Log In
          </span>
        </p>
        <p className="mt-10 text-[#667085] font-[500] text-[1vw] text-center">
          By signing up you agree to the Terms & Conditions and Privacy Policy
        </p>
      </form>
    </AppModal>
  );
};

export default SignupModal;
