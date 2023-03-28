/** @format */

import toast from "react-hot-toast";

/** validate username **/
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors;
}

/** validate password **/
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate reset password **/
export async function resetPasswordValidate(values) {
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Password does not match...!");
    }

    return errors;
}

/** verify password **/
function passwordVerify(error = {}, values) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        error.password = toast.error("Password is required");
    } else if (values.password.includes(" ")) {
        error.password = toast.error("Password should not contain spaces");
    } else if (values.password.length < 6) {
        error.password = toast.error(
            "Password should be at least 6 characters"
        );
    } else if (!specialChars.test(values.password)) {
        error.password = toast.error("Password must have special character");
    }

    return error;
}

/** verify username **/
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username is required...!");
    } else if (values.username.includes(" ")) {
        error.username = toast.error("Username does not contain spaces...!");
    }

    return error;
}
