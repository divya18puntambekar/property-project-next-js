export const LoginValidation = (formData: any) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errors = {
        email: '',
        password: ''
    }
    if(!formData.email.trim()){
        errors.email = "Email is required";
    } else if(!emailRegex.test(formData.email)){
         errors.email = "Invalid email";
    }
    if(!formData.password.trim()){
        errors.password = "Password is required";
    } else if(formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters:";
    }
    return errors;
} 