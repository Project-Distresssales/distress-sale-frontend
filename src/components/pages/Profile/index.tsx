'use client';
import API from '@/constants/api.constant';
import { countries } from '@/constants/index.constant';
import { isEmpty, loginValidationSchema } from '@/helpers';
import useGlobalState from '@/hooks/globalstate.hook';
import useRequest from '@/services/request/request.service';
import { profileUpdateAction } from '@/store/profile.slice';
import { getFileMetadata, getFormData } from '@/utils/upload.utils';
import { Checkbox } from '@mui/material';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function ProfilePage() {
  const { profile: user } = useGlobalState();

  const [file, setFile] = React.useState<any>();

  React.useEffect(() => {
    if (!user.firstName) window.location.href = '/';
  }, []);

  const dispatch = useDispatch();
  const { makeRequest, isLoading, data } = useRequest();

  const onSubmit = async (values) => {
    makeRequest({
      url: API.login,
      data: values,
      method: 'POST',
    })
      .then((res) => {
        const { status, data }: any = res.data;

        // dispatch(profileUpdateAction(data));
        // onClose();
        // next();
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
        } else if (status === 401) {
          toast.error(data.message);
        } else {
          toast.error('Something went wrong! Pls try again!', {});
        }
      });
  };

  const [form, setForm] = React.useState({
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

  // const { email, password } = values;

  // const iDisabled = isEmpty(email) || isEmpty(password) || Object.keys(errors).length > 0;

  return (
    <div className="flex flex-col items-stretch px-5 py-14 pb-16 max-w-[1200px] mx-auto">
      <div className="w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col justify-start items-start w-[55%] max-md:w-full max-md:ml-0">
            <div className="text-gray-900 text-center text-2xl font-bold leading-9 tracking-normal whitespace-nowrap max-md:max-w-full">
              My Profile
            </div>
            <div className="text-gray-500 text-center text-base font-medium leading-7 tracking-normal whitespace-nowrap mt-2 max-md:max-w-full">
              Welcome {user.firstName}!
            </div>

            <div className="w-[60%] flex flex-col gap-5">
              <div className="flex justify-between w-full">
                <div className="text-gray-900 text-left text-sm font-bold leading-7 tracking-normal whitespace-nowrap flex-1">
                  Name:
                </div>
                <div className="text-gray-900 text-sm leading-7 tracking-normal whitespace-nowrap flex-1 text-left">
                  {user.firstName} {user.lastName}
                </div>
              </div>

              <div className="flex justify-end">
                <div className="justify-center items-center border border-[color:var(--grey-300,#D0D5DD)] flex gap-2 px-20 py-1.5 rounded-md border-solid self-end max-md:px-5">
                  <div className="text-gray-900 text-center text-sm font-medium leading-7 tracking-normal grow whitespace-nowrap">
                    Verify your account{' '}
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.98242 9.99909L8.99076 12.0158L13.0158 7.98242"
                      stroke="#101828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.95742 2.04258C9.53242 1.55091 10.4741 1.55091 11.0574 2.04258L12.3741 3.17591C12.6241 3.39258 13.0908 3.56758 13.4241 3.56758H14.8408C15.7241 3.56758 16.4491 4.29258 16.4491 5.17591V6.59258C16.4491 6.91758 16.6241 7.39258 16.8408 7.64258L17.9741 8.95925C18.4658 9.53425 18.4658 10.4759 17.9741 11.0592L16.8408 12.3759C16.6241 12.6259 16.4491 13.0926 16.4491 13.4259V14.8426C16.4491 15.7259 15.7241 16.4509 14.8408 16.4509H13.4241C13.0991 16.4509 12.6241 16.6259 12.3741 16.8426L11.0574 17.9759C10.4824 18.4676 9.54075 18.4676 8.95742 17.9759L7.64076 16.8426C7.39076 16.6259 6.92409 16.4509 6.59075 16.4509H5.14909C4.26575 16.4509 3.54076 15.7259 3.54076 14.8426V13.4176C3.54076 13.0926 3.36576 12.6259 3.15742 12.3759L2.03242 11.0509C1.54909 10.4759 1.54909 9.54258 2.03242 8.96758L3.15742 7.64258C3.36576 7.39258 3.54076 6.92591 3.54076 6.60091V5.16758C3.54076 4.28424 4.26575 3.55924 5.14909 3.55924H6.59075C6.91575 3.55924 7.39076 3.38424 7.64076 3.16758L8.95742 2.04258Z"
                      stroke="#101828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between w-full">
                <div className="text-gray-900 text-left text-sm font-medium leading-7 tracking-normal whitespace-nowrap flex-1">
                  Gender:
                </div>
                <div className="text-gray-900 text-sm leading-7 tracking-normal whitespace-nowrap flex-1 text-left">
                  <select className="bg-white border border-[#DDE2E5] text-gray-900 text-[1vw] rounded-[5px] outline-none w-full h-[36px] px-3 py-2">
                    {/* <option value="">-----</option> */}
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between w-full">
                <div className="text-gray-900 text-left text-sm font-medium leading-7 tracking-normal whitespace-nowrap flex-1">
                  Location:
                </div>
                <div className="text-gray-900 text-sm leading-7 tracking-normal whitespace-nowrap flex-1 text-left">
                  <select className="bg-white border border-[#DDE2E5] text-gray-900 text-[1vw] rounded-[5px] outline-none w-full h-[36px] px-3 py-2">
                    {countries.map((country) => (
                      <option value={country} key={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-between w-full">
                <div className="text-gray-900 text-left text-sm font-medium leading-7 tracking-normal whitespace-nowrap flex-1">
                  Date of Birth:
                </div>
                <div className="text-gray-900 text-sm leading-7 tracking-normal whitespace-nowrap flex-1 text-left">
                  <input
                    type="date"
                    className="bg-white border border-[#DDE2E5] text-gray-900 text-[1vw] rounded-[5px] outline-none w-full h-[36px] px-3 py-2"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col justify-start items-start">
                <div className="text-gray-900 text-center text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-16 max-md:max-w-full max-md:mt-10">
                  Addresses
                </div>
                <div className="text-gray-500 text-center text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2 max-md:max-w-full">
                  Manage your saved addresses
                </div>

                <div className="justify-center items-center border border-[color:var(--primary-900,#415EFF)] flex gap-2.5 mt-5 px-10 py-1.5 rounded-md border-solid self-start max-md:px-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10H15" stroke="#415EFF" stroke-linecap="round" strokeLinejoin="round" />
                    <path d="M10 15V5" stroke="#415EFF" stroke-linecap="round" strokeLinejoin="round" />
                  </svg>

                  <div className="text-blue-600 text-center text-sm leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    New Location
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="items-start shadow-xl bg-white flex justify-between gap-5 px-8 py-4 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:px-5">
                <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                  <div className="text-gray-900 text-center text-sm font-bold leading-7 tracking-normal whitespace-nowrap">
                    My Ads (0)
                  </div>
                  <div className="text-slate-600 text-center text-xs tracking-normal mt-3">Ads viewed 0 times</div>
                </div>
                <div className="bg-gray-200 self-stretch w-px shrink-0 h-[86px]" />
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col mt-2 self-start">
                  <div className="text-gray-900 text-center text-sm font-bold leading-7 tracking-normal whitespace-nowrap">
                    My Searches (0)
                  </div>
                  <div className="text-slate-600 text-center text-xs tracking-normal whitespace-nowrap mt-3">
                    Saved Searches
                  </div>
                </div>
                <div className="bg-gray-200 self-stretch w-px shrink-0 h-[86px]" />
                <div className="justify-center items-stretch flex grow basis-[0%] flex-col mt-2 self-start">
                  <div className="text-gray-900 text-center text-sm font-bold leading-7 tracking-normal whitespace-nowrap">
                    My Favorites (0)
                  </div>
                  <div className="text-slate-600 text-center text-xs tracking-normal mt-3">Favorites</div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  loading="lazy"
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : user.profileImage
                      ? user.profileImage
                      : `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&size=128&rounded=true`
                  }
                  className="aspect-[1.17] object-contain object-center w-80 h-80 rounded-[50%] overflow-hidden object-cover max-w-full mt-14 max-md:mt-10"
                />
                <div
                  className="text-gray-900 hover:text-blue-700 transition text-center text-sm font-medium leading-7 tracking-normal whitespace-nowrap mt-2 w-fit"
                  onClick={() => {
                    document.getElementById('pic')?.click();
                  }}
                >
                  Change Profile Picture
                </div>

                <input
                  type="file"
                  name="pic"
                  id="pic"
                  hidden
                  onChange={async (e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                      setFile(file);

                      const profileImage = await getFileMetadata(file);
                      dispatch(
                        profileUpdateAction({
                          profileImage,
                        })
                      );

                      toast.success('Successfully Updated profile!');
                    }

                    // try {
                    //   const res = await makeRequest({
                    //     url: API.profilePic,
                    //     method: 'POST',
                    //     data: getFormData({
                    //       avater: file,
                    //     }),
                    //   });

                    //   toast.success('Succesfully Updated profile!');
                    //   const { data } = res.data;
                    //   console.log(data);
                    //   dispatch(profileUpdateAction(data));
                    // } catch (e) {
                    //   toast.error('Could not upload profile picture, Please try again!');
                    // }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-start flex-col">
        <div className="text-gray-900 text-left text-sm font-bold leading-7 tracking-normal w-full mt-16 max-md:max-w-full max-md:mt-10">
          Notifications
        </div>

        <div className="items-center flex gap-2 mt-2 self-start max-md:max-w-full max-md:flex-wrap">
          <Checkbox />
          <div className="text-gray-900 text-center text-sm tracking-normal whitespace-nowrap max-md:max-w-full">
            Get weekly newsletter featuring the most sought-after deals available on Distress Sale
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 ">
          <Checkbox />

          <div className="text-gray-900 text-center text-sm tracking-normal whitespace-nowrap max-md:max-w-full">
            Get amazing deals and discounts
          </div>
        </div>
        <div className="text-white text-sm font-black leading-7 tracking-normal whitespace-nowrap justify-center items-center border border-[color:var(--primary-900,#415EFF)] shadow-sm bg-blue-600 mt-10 px-6 py-1 rounded-md border-solid self-start max-md:px-5">
          Update
        </div>
      </div>
    </div>
  );
}
