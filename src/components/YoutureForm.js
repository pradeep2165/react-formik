import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};
const onSubmit = (values) => {
  console.log("from data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

function YoutubeForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email">{(errorMsg) => <div className="errors">{errorMsg}</div>}</ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <div className="'from-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" name="comments" />
        </div>
        <div className="'from-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              console.log(props);
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
