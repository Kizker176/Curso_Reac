import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Models
import { user } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  //   let user = new user();

  const initalValues = {
    username: "",
    email: "",
    password: "",
    confirm: "", // to confirm password
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is requiered")
      .min(6, "Usermane too short")
      .max(12, "Usermane too long"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is requiered"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
      .required("Role is requiered"),
    password: Yup.string()
      .required("Password is requiered")
      .min(8, "Passwor to short"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords must match!"
        ),
      })
      .required("You must confirm the password"),
  });

  const submit = (values) => {
    console.log("Register user");
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initalValues}
        // *** Yup Validation Schema ***
        validationSchema={registerSchema}
        // *** onSubmitt Event ***
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
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
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              name="username"
              placeholder="username"
              type="text"
            />
            {/* Username errors */}
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div" />
            )}

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

            <label htmlFor="confirm">password</label>
            <Field
              id="confirm"
              name="confirm"
              type="password"
              placeholder="confirm Password"
            />
            {/* confirm errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div" />
            )}

            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Sending your credentials ...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
