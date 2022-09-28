

export const loginValidation = (form)=>{
    const errors = {}

    let formValid = true

    if(form.username.length < 4){
       formValid = false
       errors['username'] = 'نام کاربری باید بیش از 4 کاراکتر باشد.'
   }
    
    if(!form.username.length){
        formValid = false
        errors['username'] = 'نام کاربری الزامی میباشد.'
    }
    
     
    if(!form.password.length){
        formValid = false
        errors['password'] = 'پسورد الزامی میباشد.'
    }

    return {
        formValid,
        errors
    }

}