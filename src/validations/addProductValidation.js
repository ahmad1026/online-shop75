import * as yup from 'yup';


export const addProductVAlidationSchema = yup.object().shape({
    title: yup.string().required({type:'title', message:'عنوان کالا را وارد کنید'}),
    category: yup.required({type:'category', message:'دسته بندی کالا را وارد کنید'}),
    price: yup.required({type:'price', message:'قیمت کالا را وارد کنید'}),
    count: yup.required({type:'count', message:'تعداد کالا را وارد کنید'}),
    discription: yup.required({type:'discription', message:'توضیح کالا را وارد کنید'}),
    images: yup.required({type:'images', message:'عکس کالا را اضافه کنید'}),
})