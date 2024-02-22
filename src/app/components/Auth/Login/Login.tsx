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
      .catch((error: AxiosError) => {
        const res: any = error?.response;

        const status = res?.status;
        const data = res?.data;

        if (status === 406) {
          toast.error(data.message);
        } else if (status === 400) {
          setErrors(data.data);
        } else if (status === 401) {
          toast.error(data.message);
        } else {
          toast.error('Something went wrong! Pls try again!', {});
        }
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
          // data: {
          //   idToken: await user.getIdToken(),
          // },
        });

        stopLoad();
        toast.success(`Successfully Loggedin ${user.displayName?.split(' ')[0] ?? user.displayName}`);

        // setTimeout(() => {
        //   router.push('/dashboard');
        // }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode);

        if (errorCode === 'auth/invalid-login-credentials') {
          return toast.error('Invalid Login Credentials!');
        }

        toast.error(errorMessage);
      });
    // .finally(() => {
    //   stopLoad();
    // });
  };

  return (
    <AppModal
      open={open}
      handleClose={onClose}
      style={{
        backgroundColor: '#fff',
        padding: '40px 50px 30px 50px',
        position: 'relative',
        height: 'auto',
        width: '600px',
      }}
    >
      <form className="w-full" onSubmit={handleSubmit}>
        <h1 className="text-[#101828] font-[700] text-[1.4vw] text-center">Log In</h1>
        <div className="w-full flex items-center space-x-7 mt-7">
          <AuthButton text="Continue with Facebook" icon={Assets.facebookAuth} />
          <AuthButton
            loading={loading}
            text="Continue with Google"
            icon={Assets.googleAuth}
            onClick={handleGoogleLogin}
          />
        </div>
        <div className="flex items-center my-7">
          <div className="border border-[#EAECF0] w-full" />
          <p className="text-[#98A2B3] text-[1vw] font-[500] px-3">OR</p>
          <div className="border border-[#EAECF0] w-full" />
        </div>

        <div className="space-y-5 mt-7">
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
          <div className="mt-10">
            <AppButton
              text="Log In"
              fullWidth={true}
              boldText={false}
              loading={isLoading}
              disabled={iDisabled}
              type="submit"
            />
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <p className="text-[#667085] font-[500] text-[1vw]">Remember me</p>
          <p className="text-[#667085] font-[500] text-[1vw] cursor-pointer" onClick={handleForgotPasswordModal}>
            Forgot Password?
          </p>
        </div>

        <p className="mt-10 text-[#101828] font-[700] text-[1vw] text-center">
          Don&apos;t have an account?{' '}
          <span className="text-[#415EFF] cursor-pointer" onClick={handleRegisterModalOpen}>
            Create One
          </span>
        </p>
        <p className="mt-10 text-[#667085] font-[500] text-[1vw] text-center">
          By signing up you agree to the Terms & Conditions and Privacy Policy
        </p>
      </form>
    </AppModal>
  );
};

export default LoginModal;
