


export const productValidation = async (form) => {
    const errors = {}
    let formValid = true
    console.log(form);
    if (form.title.length < 4) {
        formValid = false
        errors['title'] = 'نام کالا باید بیش از 4 کاراکتر باشد.'
    }
    if (!form.title.length) {
        formValid = false
        errors['title'] = 'نام محصول الزامی میباشد.'
    }
    // if (!form.images.size) {
    //     formValid = false
    //     errors['images'] = 'عکس محصول الزامی میباشد.'
    // }

    if (!form.count.length) {
        formValid = false
        errors['count'] = 'تعداد محصول الزامی میباشد.'
    }


    if (!form.price.length) {
        formValid = false
        errors['price'] = 'قیمت الزامی میباشد.'
    }

    // if (form.discription?.length < 4) {
    //     formValid = false
    //     errors['discription'] = 'توضیح کالا باید بیش از 4 کاراکتر باشد.'
    // }

    return {
        formValid,
        errors
    }

}