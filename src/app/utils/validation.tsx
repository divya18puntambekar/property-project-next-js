export const validation = (formData: any) => {  
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const contactRegrex = /^[0-9]{10}/
    const errors = {
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
    }
    if(!formData.name.trim()){
        errors.name = "Name is required";
    } else if(!nameRegex.test(formData.name)){
        errors.name = "Invalid name";
    }
    if(!formData.email.trim()){
       errors.email = "Email is required";
    } else if(!emailRegex.test(formData.email)){
        errors.email = "Invalid email";
    }
    if(!formData.contact.trim()){
        errors.contact = "Contact is required";  
    } else if(!contactRegrex.test(formData.contact)){
        errors.contact = "Invalid contact";    
    }
    if(!formData.password.trim()){
        errors.password = "Password is required";
        
    } else if(formData.password.length < 8){
        errors.password = "Password should be at least 8 characters";
    }
    if (!formData.confirmPassword.trim()) {
        errors.confirmPassword = "Confirm password is required";
    } else if(formData.confirmPassword != formData.password) {
        errors.confirmPassword = "Passwords do not match";
    }
    return errors;
}