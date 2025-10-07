"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  description: string;
}

interface FormFieldProps {
  label: string;
  name: keyof ContactFormValues;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  rows?: number;
}

const validationSchema = Yup.object<ContactFormValues>().shape({
  firstName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("First Name is required"),
  lastName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  companyName: Yup.string().max(100, "Must be 100 characters or less"),
  description: Yup.string()
    .min(10, "Must be at least 10 characters")
    .max(500, "Must be 500 characters or less")
    .required("Description is required"),
});

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  description: "",
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  rows,
}) => {
  const isTextArea = type === "textarea";

  const inputClasses = `
    w-full p-3 border border-gray-300 rounded-lg shadow-sm 
    focus:ring-blue-500 focus:border-blue-500 
    transition ease-in-out placeholder-gray-400
    ${isTextArea ? "resize-y" : ""}
  `;

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <Field
        name={name}
        id={name}
        type={!isTextArea ? type : undefined}
        as={isTextArea ? "textarea" : "input"}
        placeholder={placeholder || label}
        rows={isTextArea ? rows : undefined}
        className={inputClasses}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600 font-medium"
      />
    </div>
  );
};

const ContactForm: React.FC = () => {
  const handleSubmit = (
    values: ContactFormValues,
    { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setTimeout(() => {
      console.log("Form Data Submitted:", JSON.stringify(values, null, 2));
      alert(
        `Submission successful! But no data has been sent.\nThis is only used for showcasing formik forms.\n\n${JSON.stringify(values, null, 2)}`
      );

      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="First Name"
              name="firstName"
              placeholder="e.g., Jane"
            />
            <FormField
              label="Last Name"
              name="lastName"
              placeholder="e.g., Doe"
            />
          </div>

          <FormField
            label="Email Address"
            name="email"
            type="email"
            placeholder="e.g., jane.doe@business.com"
          />

          <FormField
            label="Company Name (Optional)"
            name="companyName"
            placeholder="e.g., Your Company Inc."
          />

          <FormField
            label="Message"
            name="description"
            type="textarea"
            rows={5}
            placeholder="Briefly describe your needs"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
                w-full py-3 mt-8 text-lg font-bold rounded-lg shadow-md 
                transition duration-300 ease-in-out transform 
                ${
                  isSubmitting
                    ? "bg-blue-500 text-gray-600 cursor-not-allowed"
                    : "bg-sky-400 text-white hover:bg-sky-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                }
              `}
          >
            {isSubmitting ? "Sending Request..." : "Submit Inquiry"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
