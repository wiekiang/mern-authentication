/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";

import avatar from "../assets/profile.png";
import styles from "../styles/Login.module.css";

export default function Login() {
    const formik = useFormik({
        initialValues: {
            username: "",
        },
        validate: usernameValidate,
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
                <div className={styles.glass}>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img
                                className={styles.profile__img}
                                src={avatar}
                                alt="avatar"
                            />
                        </div>

                        <div className="textbox flex flex-col items-center gap-4">
                            <input
                                {...formik.getFieldProps("username")}
                                className={styles.textbox}
                                type="text"
                                placeholder="username"
                            />
                            <button className={styles.btn} type="submit">
                                Login
                            </button>
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-500">
                                Not a Member?{" "}
                                <Link to="/register" className="text-red-500">
                                    Register Now
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
