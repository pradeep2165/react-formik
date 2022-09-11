import React from "react";
import { useFormik } from "formik";

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });
  console.log("form values", formik.values);
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" value={formik.values.channel} onChange={formik.handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
