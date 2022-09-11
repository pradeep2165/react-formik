import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("from data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "required";
//   }
//   if (!values.email) {
//     errors.email = "required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.channel) {
//     errors.channel = "required";
//   }
//   return errors;
// };
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  console.log("Visited field", formik.touched);
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.name && formik.touched.name ? <div className="errors">{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email ? <div className="errors">{formik.errors.email}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" name="channel" value={formik.values.channel} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.channel && formik.touched.channel ? <div className="errors">{formik.errors.channel}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
