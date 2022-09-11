import React from "react";
import { useFormik } from "formik";

function YoutubeForm() {
  const formik = useFormik({});
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
