/** @format */

import React from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidate } from "../helper/validate";

import avatar from "../assets/profile.png";
import styles from "../styles/Login.module.css";

export default function Reset() {
    const formik = useFormik({
        initialValues: {
            password: "",
            confirm_pwd: "",
        },
        validate: resetPasswordValidate,
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
                        <h4 className="text-3xl py-4">Reset Your Password</h4>
                    </div>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4 mb-5">
                            <img
                                className={styles.profile__img}
                                src={avatar}
                                alt="avatar"
                            />
                        </div>
                        <div className="textbox flex flex-col items-center gap-4">
                            <input
                                {...formik.getFieldProps("password")}
                                className={styles.textbox}
                                type="password"
                                placeholder="Enter New Password"
                            />
                            <input
                                {...formik.getFieldProps("confirm_pwd")}
                                className={styles.textbox}
                                type="password"
                                placeholder="Repeat New Password"
                            />
                            <button className={styles.btn} type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
