'use client';
import { AppButton } from '@/app/components/Buttons/Buttons';
import TextField from '@/app/components/Fields/TextField';
import { FadeIn } from '@/app/components/Transitions/Transitions';
import API from '@/constants/api.constant';
import { isEmpty, signupValidationSchema } from '@/helpers';
import useRequest from '@/services/request/request.service';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const page = ({ searchParams: { token } }) => {
  const { makeRequest, isLoading, data } = useRequest();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (values) => {
    makeRequest({
      url: API.resetPass,
      data: values,
      params: {
        token,
      },
      method: 'POST',
    })
      .then((res) => {
        const { status, data }: any = res.data;

        toast.success('Successfully Reset Password, Go ahead and login');
        window.location.href = '/';
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
    password: '',
    confirmPassword: '',
  });

  const { values, handleSubmit, handleChange, errors, setErrors, getFieldProps } = useFormik({
    initialValues: form,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit,
  });

  const { password, confirmPassword } = values;

  const iDisabled = isEmpty(password) || isEmpty(confirmPassword) || Object.keys(errors).length > 0;

  return (
    <div className="flex justify-center items-center min-h-[70vh] ">
      <form className="w-[90%] sm:w-[40%] py-[50px] px-[50px] shadow-lg rounded-[10px]" onSubmit={handleSubmit}>
        <h1 className="text-[#101828] font-[700] text-[1.4vw] text-center">Reset Password</h1>

        <div className="space-y-5 mt-7 w-full">
          <TextField
            id="password"
            type="password"
            label="Enter new password*"
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
                  label="Confirm Password*"
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
              Next
            </AppButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
