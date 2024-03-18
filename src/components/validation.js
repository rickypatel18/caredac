export default function Validation(values){
    const errors = {}

    const email_patt = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name === ""){
        errors.name = "name is required";
    }
    if(values.email === ""){
        errors.email = "email is required";
    }
    else if(!email_patt.test(values.email)){
        errors.email = "email is incorrect";
    }
    if(values.password === ""){
        errors.password = "password is required";
    }
    
    return errors;
};