import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is requiered"),
  password: Yup.string().required("Password is requiered"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>Login</h4>
      <Formik
        // *** Initial values that the from will take
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema={loginSchema}
        // *** onSubmitt Event ***
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          //we save the data en the localstorage
          localStorage.setItem("credentials", values);
        }}
      >
        {/* We obtain props from Formik */}
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
            />
            {/* Email errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label htmlFor="password">password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            {/* Password errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials ...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
