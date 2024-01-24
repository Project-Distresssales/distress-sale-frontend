import { catchAsync } from "@/helpers/api.helper";
import { profileLoginAction, profileUpdateAction } from "@/store/profile.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import API from "@/constants/api.constant";
import { toast } from 'react-toastify';
import useRequest from "@/services/request/request.service";

const useSignupController = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, makeRequest } = useRequest();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
      setOpenModal(true);
  }
  const handleCloseModal = () => {
      setOpenModal(false);
  }

  // Navigate to Login
  const goToLogin = () => {
      router.push('/login');
  }

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [referralCode, setReferralCode] = useState<string>('');

  const handleFirstNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setLastName(event.target.value);
  };

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEmail(event.target.value);
  };
  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setConfirmPassword(event.target.value);
  };
  const handleReferralCodeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setReferralCode(event.target.value);
};

  // Validation rules for the name and email inputs
  const isFirstNameValid = firstName.length >= 3;
  const isLastNameValid = lastName.length >= 3;
  const isEmailValid = email.length > 5 && email.includes('@');
  const isPassword = password.length > 5;
  const isConfirmPassword = confirmPassword.length > 5;
  const isPasswordMatch = password === confirmPassword;

  const payload = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    confirm_password: confirmPassword,
    referral_code: referralCode
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    catchAsync(
      async () => {
        const res = await makeRequest({
          method: "POST",
          url: API.signup,
          data: payload,
        });

        const { message, data } = res.data;

        dispatch(profileLoginAction(data));

        dispatch(profileUpdateAction(data));
      },
      (err: any) => {
        console.log(err, 'rerr');
        toast.success(err);
      }
    );
  };

  return {
    onSubmit,
    isLoading,
    handlePasswordChange,
    handleEmailChange,
    handleFirstNameChange,
    handleLastNameChange,
    handleConfirmPasswordChange,
    isFirstNameValid,
    isLastNameValid,
    isConfirmPassword,
    isPasswordMatch,
    isPassword,
    password,
    email,
    firstName,
    lastName,
    confirmPassword,
    isEmailValid,
    referralCode,
    handleReferralCodeChange,
    goToLogin
  };
};

export default useSignupController;
