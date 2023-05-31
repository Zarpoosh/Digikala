import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const Input = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("*ایمیل نامعتبر")
        .required("*این فیلد را خالی نگذارید."),
    }),
  });
  return (
    <>
   
        
      {/* icons */}
      {/* <div className="flex flex-row justify-between p-3">
        <div className="flex">
          <p>همراه ما باشید!</p>
        </div>
        <div className="flex text-gray-500">
          <a className="mx-2" href="#">
            <i>
              <BsInstagram className="h-6 w-6" />
            </i>
          </a>
          <a className="mx-2" href="#">
            <i>
              <BsTwitter className="h-6 w-6" />
            </i>
          </a>
          <a className="mx-2" href="#">
            <i>
              <BsLinkedin className="h-6 w-6" />
            </i>
          </a>
          <a className="mx-2" href="#">
            <i>
              <BsYoutube className="h-6 w-6" />
            </i>
          </a>
        </div>
      </div> */}
      {/* end of icons */}
      <form className="w-full flex-row  flex my-2">
        <input
          value={Input}
          placeholder="ایمیل شما"
          type="email"
          className="p-2 mx-2 rounded-lg flex w-full bg-gray-300 focus:outline-none"
          {...formik.getFieldProps("email")}
        />

        <button
          id="email"
          type="submit"
          disabled={!Input}
          className="bg-red-500 my-auto disabled:opacity-20 p-3 rounded-lg mx-2 text-white"
        >
          ثبت
        </button>
      </form>
      {formik.touched.email && formik.errors.email ? (
        <p className="text-red-500 mx-3 text-xs my-1">{formik.errors.email}</p>
      ) : null}
    
    </>
  );
};

export default Input;
