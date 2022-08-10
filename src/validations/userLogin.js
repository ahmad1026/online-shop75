import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    username: yup.string().required({type: 'username', message: 'نام کاربری را وارد کنید.'}),
    password: yup.string().required({type: 'password', message: 'رمز عبور را وارد کنید.'})
});