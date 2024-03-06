import { Backdrop, IconButton, MenuItem } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import MyTextField from '../Fields/MyTextField';
import { ZoomInOut } from '../Transitions/Transitions';


interface AddressModalTypes {
    onClose: () => void;
    open: boolean;
    formData: any;
    handleInputChange: any;
    handleSubmit: any;
}

export default function AddressModal({ onClose, open, formData, handleInputChange, handleSubmit }: AddressModalTypes) {

    return (
        <Backdrop
            open={open}
            transitionDuration={500}
            sx={{
                zIndex: 999,
            }}
        >
            <ZoomInOut target={open} className="fixed h-full top-0 left-0 right-0 mx-auto w-[90%] md:w-full flex justify-center items-center">
                <div className="relative flex flex-col items-center justify-center bg-white md:px-10 px-5 md:py-10 py-5 rounded-[8px] w-[700px] h-auto">
                    <IconButton
                        className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 cursor-pointer p-4"
                        onClick={onClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#506683" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 8L8 14" stroke="#506683" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 8L14 14" stroke="#506683" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </IconButton>
                    <h1 className="text-black md:text-[30px] text-[6vw] font-semibold roboto">
                        Address
                    </h1>
                    <div className="mt-10 w-full">
                        <div className="space-y-5">
                            <MyTextField
                                id='address'
                                name='address'
                                label='Address'
                                placeholder='Enter Address'
                                value={formData.address}
                                onChange={handleInputChange}
                                type='text'
                                disabled={false}
                            />
                            <div className="flex space-x-5">
                                <MyTextField
                                    id='city'
                                    name='city'
                                    label='City'
                                    placeholder='Enter City'
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    type='text'
                                    disabled={false}
                                />
                                <MyTextField
                                    id='state'
                                    name='state'
                                    label='State'
                                    placeholder='Select state'
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    type='text'
                                    disabled={false}
                                />
                                {/* <MyTextField
                                    id='state'
                                    name='state'
                                    label='State'
                                    placeholder='Select state'
                                    type='text'
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    select
                                >
                                    {state?.map((option: any) => (
                                        <MenuItem key={option?.state_id} value={option?.name}>
                                            {option?.name}
                                        </MenuItem>
                                    ))}
                                </MyTextField> */}
                            </div>
                        </div>

                        <button
                            className="text-white bg-[#415EFF] w-[60%] mx-auto flex justify-center items-center py-4 rounded-[8px] md:text-[16px] text-[] mt-10 font-medium poppins text-center"
                            type="button"
                            onClick={handleSubmit}
                        >
                        Save Address
                        </button>
                    </div>
                </div>
            </ZoomInOut>
        </Backdrop>
    )
}
