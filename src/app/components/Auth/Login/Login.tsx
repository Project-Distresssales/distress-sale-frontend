import API from '@/constants/api.constant';
import Assets from '@/constants/assets.constant';
import { isEmpty, loginValidationSchema } from '@/helpers';
import useRequest from '@/services/request/request.service';
import { profileLoginAction } from '@/store/profile.slice';
import { VoidCallback } from '@/utils/types';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { AppButton, AuthButton } from '../../Buttons/Buttons';
import TextField from '../../Fields/TextField';
import { AppModal } from '../../Modals/Modals';
import useAuth from '@/services/auth/auth';
import useLoad from '@/hooks/load';
import useAppTheme from '@/hooks/theme.hook';
import { CircularProgress } from '@mui/material';

const LoginModal = ({
  open,
  onClose,
  handleForgotPasswordModal,
  handleRegisterModalOpen,
}: {
  open: boolean;
  onClose: () => void;
  handleForgotPasswordModal: VoidCallback;
  handleRegisterModalOpen: VoidCallback;
}) => {
  const { makeRequest, isLoading, data } = useRequest();
  const { isMobile } = useAppTheme();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (values) => {
    makeRequest({
      url: API.login,
      data: values,
      method: 'POST',
    })
      .then((res) => {
        const { status, data }: any = res.data;

        dispatch(profileLoginAction(data));
        onClose();
      })
      .catch((error: any) => {
        toast.error(error?.response?.data?.message);
      });
  };

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { values, handleSubmit, handleChange, errors, setErrors, getFieldProps } = useFormik({
    initialValues: form,
    validationSchema: loginValidationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit,
  });

  const { email, password } = values;

  const iDisabled = isEmpty(email) || isEmpty(password) || (errors && Object.keys(errors).length > 0);

  const { load, stopLoad, loading } = useLoad();
  const { user, signInWithGoogle } = useAuth();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(async (userCredential) => {
        const user = userCredential.user;
        const { _tokenResponse } = userCredential as any;

        console.log(userCredential);
        await makeRequest({
          url: API.googleLogin,
          method: 'GET',
        });

        stopLoad();
        toast.success(`Successfully Loggedin ${user.displayName?.split(' ')[0] ?? user.displayName}`);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <AppModal
      open={open}
      handleClose={onClose}
      style={{
        backgroundColor: '#fff',
        padding: !isMobile ? '30px' : '20px',
        position: 'relative',
        height: 'auto',
        width: !isMobile ? '500px' : '90%',
      }}
    >
      <form className="w-full" onSubmit={handleSubmit}>
        <h1 className="text-[#101828] font-[700] md:text-[22px] text-[5vw] text-center leading-tight">Sign in to your Account</h1>
        {/* <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-7 space-y-4 md:space-y-0 mt-7">
          <AuthButton text="Continue with Facebook" icon={Assets.facebookAuth} />
          <AuthButton
            loading={loading}
            text="Continue with Google"
            icon={Assets.googleAuth}
            onClick={handleGoogleLogin}
          />
        </div> */}
        {/* <div className="flex items-center my-7">
          <div className="border border-[#EAECF0] w-full" />
          <p className="text-[#98A2B3] md:text-[1vw] text-[3.7vw] font-[500] px-3">OR</p>
          <div className="border border-[#EAECF0] w-full" />
        </div> */}

        <div className="space-y-2 mt-7">
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email address"
            withBackground={false}
            readOnly={false}
            error={errors?.email}
            {...getFieldProps('email')}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            placeholder="Enter password"
            obscured={true}
            withBackground={false}
            readOnly={false}
            error={errors?.password}
            {...getFieldProps('password')}
          />
        </div>
        <div className="mt-10">
          <button
            className={`
      flex justify-center items-center rounded-[8px] py-3.5 text-white font-[500] 
    md:text-[16px] text-[3.2vw] bg-secondary w-full`}
            type="submit"
            disabled={iDisabled}
          >
            {isLoading ? <CircularProgress size={16} sx={{ color: 'white' }} /> : 'Sign In'}
          </button>
        </div>

        <div className="mt-5 flex justify-end items-end">
          {/* <p className="text-[#667085] font-[500] md:text-[1vw] text-[3.5vw]">Remember me</p> */}
          <p
            className="text-[#667085] font-[500] md:text-[1vw] text-[3.5vw] cursor-pointer"
            onClick={handleForgotPasswordModal}
          >
            Forgot Password?
          </p>
        </div>

        <p className="mt-10 text-[#101828] font-[700] md:text-[14px] text-[3.2vw] text-center">
          Don&apos;t have an account?{' '}
          <span className="text-primary cursor-pointer" onClick={handleRegisterModalOpen}>
            Create One
          </span>
        </p>
      </form>
    </AppModal>
  );
};

export default LoginModal;
