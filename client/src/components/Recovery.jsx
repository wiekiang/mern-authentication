/** @format */

import React from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";

import avatar from "../assets/profile.png";
import styles from "../styles/Login.module.css";

export default function Recovery() {
    const formik = useFormik({
        initialValues: {
            password: "",
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            console.log(values);
        },
    });

    return (
        <div className="container mx-auto">
            <Toaster position="top-center" reverseOrder={false} />

            <div className="flex justify-center items-center h-screen">
                <div className={styles.glass} style={{ width: "40%" }}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-3xl py-4">Recover Password</h4>
                    </div>
                    <form className="py-1">
                        <div className="textbox flex flex-col items-center gap-4">
                            <span className="text-sm text-left text-gray-500">
                                Enter 6 digit OTP sent to your email address
                            </span>
                            <input
                                className={styles.textbox}
                                type="text"
                                maxLength={6}
                                placeholder="OTP"
                            />
                            <button className={styles.btn} type="submit">
                                Submit
                            </button>
                        </div>

                        <div className="text-center py-4 mt-4">
                            <span className="text-gray-500 text-sm">
                                Can't get OTP?{" "}
                                <button className="text-red-500">
                                    Resend Now
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
