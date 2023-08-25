"use client"

import React from 'react'
import Assets from '@/constants/assets.constant'
import TextField from '../components/Fields/TextField'
import { AppButton } from '../components/Buttons/Buttons'

export default function ResetPassword() {

    return (
        <div>
            <div className="w-full h-auto pb-32">
                <div className="h-[550px] flex justify-center items-center">

                    <div className="rounded-[10px] px-[50px] bg-white mx-auto py-[30px] w-[400px]" 
                    style={{boxShadow: "0px 8px 50px -4px rgba(16, 24, 40, 0.04), 0px 20px 50px -4px rgba(16, 24, 40, 0.06), 1px -4px 50px 4px rgba(16, 24, 40, 0.04), 0px -10px 50px 4px rgba(0, 0, 0, 0.06)"}}>
                        <h1 className="text-[#101828] font-[700] text-[1.4vw] text-center">Reset Password</h1>
                        <div className="space-y-5 mt-7">
                            <TextField
                                id="newPassword"
                                type="password"
                                label="Enter new password*"
                                placeholder="Password"
                                value=""
                                onInputChange={() => { }}
                                require={false}
                                isPassword={true}
                                withBackground={false}
                                readOnly={false}
                            />
                            <TextField
                                id="confirmPassword"
                                type="password"
                                label="Confirm password*"
                                placeholder="Password"
                                value=""
                                onInputChange={() => { }}
                                require={false}
                                isPassword={true}
                                withBackground={false}
                                readOnly={false}
                            />
                            <div className='mt-10'>
                                <AppButton text="Submit" fullWidth={true} boldText={false} onClickButton={() => { }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
