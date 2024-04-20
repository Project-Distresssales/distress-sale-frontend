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
import useSignupController from './controller';
import { catchAsync } from '@/helpers/api.helper';
import useAppTheme from '@/hooks/theme.hook';
import { CircularProgress } from '@mui/material';

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
  const dispatch = useDispatch();
  const { isMobile } = useAppTheme();
  const router = useRouter();
  const { isLoading, makeRequest } = useRequest();
  const [errors, setErrors] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Navigate to Login
  const goToLogin = () => {
    router.push('/login');
  };

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [referralCode, setReferralCode] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleFirstNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setConfirmPassword(event.target.value);
  };
  const handleReferralCodeChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setReferralCode(event.target.value);
  };
  const handlePhoneChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPhone(event.target.value);
  };

  // Validation rules for the name and email inputs
  const isFirstNameValid = firstName.length >= 3;
  const isLastNameValid = lastName.length >= 3;
  const isEmailValid = email.length > 5 && email.includes('@');
  const isPhoneValid = phone.length > 5;
  const isPassword = password.length > 5;
  const isConfirmPassword = confirmPassword.length > 5;
  const isPasswordMatch = password === confirmPassword;

  const payload = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    confirm_password: confirmPassword,
    referral_code: referralCode,
    phoneNumber: phone,
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    catchAsync(
      async () => {
        const res = await makeRequest({
          method: 'POST',
          url: API.signup,
          data: payload,
        });

        const { message, data } = res.data;

        dispatch(profileLoginAction(data));
        onClose();
        next();
      },
      (error: any) => {
        toast.error(error?.response?.data?.message);
      }
    );
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
        width: !isMobile ? '600px' : '90%',
      }}
    >
      <form className="w-full" onSubmit={onSubmit}>
        <h1 className="text-[#101828] font-[700] md:text-[22px] text-[5vw] text-center leading-tight">Create Account</h1>
        {/* <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-7 space-y-4 md:space-y-0 mt-7">
          <AuthButton text="Continue with Facebook" icon={Assets.facebookAuth} />
          <AuthButton text="Continue with Google" icon={Assets.googleAuth} />
        </div>
        <div className="flex items-center my-7">
          <div className="border border-[#EAECF0] w-full" />
          <p className="text-[#98A2B3] md:text-[1vw] text-[3.7vw] font-[500] px-3">OR</p>
          <div className="border border-[#EAECF0] w-full" />
        </div> */}

        <div className="space-y-2 mt-7 w-full">
          <div className="flex gap-3">
            <TextField
              id="firstName"
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              withBackground={false}
              error={''}
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <TextField
              id="lastName"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              obscured={false}
              withBackground={false}
              readOnly={false}
              error={''}
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>

          <div className="flex gap-3">
            <TextField
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email address"
              withBackground={false}
              readOnly={false}
              error={''}
              value={email}
              onChange={handleEmailChange}
            />

            <TextField
              id="phone"
              type="text"
              label="Phone"
              placeholder="Enter your phone"
              withBackground={false}
              readOnly={false}
              error={''}
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <TextField
              id="password"
              type="password"
              label="Password"
              placeholder="Enter password"
              obscured={true}
              withBackground={false}
              readOnly={false}
              error={''}
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField
              id="confirmPassword"
              type="password"
              label="Re-type Password"
              placeholder="Re-type password"
              obscured={true}
              withBackground={false}
              readOnly={false}
              error={''}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            className={`
      flex justify-center items-center rounded-[8px] py-3.5 text-white font-[500] 
    md:text-[16px] text-[3.2vw] bg-secondary w-full`}
            type="submit"
            disabled={
              !isFirstNameValid ||
              !isLastNameValid ||
              !isEmailValid ||
              !isPassword ||
              !isConfirmPassword ||
              !isPasswordMatch
            }
          >
            {isLoading ? <CircularProgress size={16} sx={{ color: 'white' }} /> : 'Create Account'}
          </button>
        </div>

        <p className="mt-10 text-[#101828] font-[700] md:text-[14px] text-[3.2vw] text-center">
          Already have an account?{' '}
          <span className="text-primary cursor-pointer" onClick={handleLoginModalOpen}>
            Log In
          </span>
        </p>
        <p className="mt-7 text-[#667085] font-[500] md:text-[12px] text-[3.2vw] text-center">
          By signing up you agree to the Terms & Conditions and Privacy Policy
        </p>
      </form>
    </AppModal>
  );
};

export default SignupModal;
