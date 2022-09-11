import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("from data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "required";
  }
  return errors;
};
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("formik error", formik.errors);
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
          {formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" name="channel" value={formik.values.channel} onChange={formik.handleChange} />
          {formik.errors.channel ? <div className="errors">{formik.errors.channel}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
