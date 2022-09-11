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

function OldYoutubeForm() {
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
          <input type="text" name="name" {...formik.getFieldProps("name")} />
          {formik.errors.name && formik.touched.name ? <div className="errors">{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" {...formik.getFieldProps("email")} />
          {formik.errors.email && formik.touched.email ? <div className="errors">{formik.errors.email}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" name="channel" {...formik.getFieldProps("channel")} />
          {formik.errors.channel && formik.touched.channel ? <div className="errors">{formik.errors.channel}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;
