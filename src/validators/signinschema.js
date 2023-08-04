import * as Yup from 'yup';

export const signInValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(4).max(16).required('Password is required'),
});

export const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(4).max(16).required('Password is required'),
});