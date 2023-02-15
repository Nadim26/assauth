import React from 'react';
import { useFormik } from 'formik';
import { logIn } from '../../api/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { object, string, number, date, InferType } from 'yup';
import * as Yup from "yup"
export const Login = () => {
    
        const formik = useFormik({
          initialValues: {
            username: '',
            password: '',
            
          },
          validationSchema:Yup.object({
username: Yup.string().required("enter your user name"),
password: Yup.string().required("enter your password"),
          }),
          

          onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
        //console.log(values)  ;
        logIn(values)
        .then((res) => {
          console.log(res)

          toast.success("Logged In Successfully ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          })
        })
        .catch((err) => {
          //console.log(err.response.data.message)
          toast.error(err.response.data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true, 
              draggable: true,
              progress: undefined,
              theme: "light",
          })
      })
      toast("User info submitted ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
        },
        });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
       <label htmlFor="username">Enter your username</label>
       <input
         id="username"
         name="username"
         type="text"
         className={`block w-full rounded border py-1 px-2 ${
          formik.touched.username && formik.errors.username
              ? "border-red-400"
              : "border-blue-300"
      }`}
         onChange={formik.handleChange}
         value={formik.values.username}
       />
       <br />
        {formik.touched.username && formik.errors.username && (
                    <span >
                        {formik.errors.username}
                    </span>
                )}
       <br />
       <label htmlFor="password">Enter your password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       <br />
       {formik.touched.password && formik.errors.password && (
                    <span >
                        {formik.errors.password}
                    </span>
                )}
      <br />
       <button type="submit">Submit</button>
     </form>
     <ToastContainer />
        </div>
    );  
};


export default Login;
