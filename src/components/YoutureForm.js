import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const savedValues = {
  name: "pradeep",
  email: "learnwithpradeep@web.com",
  channel: "learnwithpradeep",
  comments: "welcome to formik",
  address: "bangalore",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("from data", values);
  console.log("submit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};
function YoutubeForm() {
  const [formValues, setFormValues] = useState(null);
  return (
    //validateOnChange={false} validateOnBlur={false}
    //use for not to validate on change/onblur
    <Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
      {(formik) => {
        console.log("formik props", formik);
        return (
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
              <Field as="textarea" name="comments" validate={validateComments} />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="'from-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone Number</label>
              <Field type="text" id="primaryPh" name="phoneNumber[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary Phone Number</label>
              <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
            </div>
            <div className="form-control">
              <label>List of Phone Number</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  console.log("form error", form.errors);
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}

                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button type="button" onClick={() => formik.validateField("comments")}>
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => formik.setFieldTouched("comments")}>
              Vasit comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit Field
            </button> */}
            <button type="button" onClick={() => setFormValues(savedValues)}>
              Saved data
            </button>
            <button type="reset">Reset</button>
            <button disabled={!formik.isValid || formik.isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;
