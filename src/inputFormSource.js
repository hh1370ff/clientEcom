import * as yup from "yup";
import { getExtension } from "./utils/getExtention";

export const customerInputs = [
  {
    name: "fullName",
    label: "Customer Name",
    type: "text",
    placeholder: "Customer Full name",
  },
  {
    name: "email",
    label: "Customer Email",
    type: "text",
    placeholder: "Customer Email",
  },
  {
    name: "country",
    label: "Customer Country",
    type: "text",
    placeholder: "Customer Country",
  },
  {
    name: "address",
    label: "Customer Address",
    type: "text",
    placeholder: "Customer Address",
  },
  {
    name: "city",
    label: "Customer City",
    type: "text",
    placeholder: "Customer City",
  },
  {
    name: "phone",
    label: "Customer Phone",
    type: "text",
    placeholder: "Customer Phone",
  },
];

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const customerInputsSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required!"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required!"),
  country: yup.string().required("Country is required!"),
  address: yup.string().required("Address is required!"),
  city: yup.string().required("City is required!"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid!"),
});

export const recipientInputs = [
  {
    name: "fullName",
    label: "Recipient Name",
    type: "text",
    placeholder: "Recipient Full name",
  },
  {
    name: "email",
    label: "Recipient Email",
    type: "text",
    placeholder: "Recipient Email",
  },
  {
    name: "country",
    label: "Recipient Country",
    type: "text",
    placeholder: "Recipient Country",
  },
  {
    name: "address",
    label: "Recipient Address",
    type: "text",
    placeholder: "Recipient Address",
  },
  {
    name: "city",
    label: "Recipient City",
    type: "text",
    placeholder: "Recipient City",
  },
  {
    name: "phone",
    label: "Recipient Phone",
    type: "text",
    placeholder: "Recipient Phone",
  },
];

export const recipientInputsSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required!"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required!"),
  country: yup.string().required("Country is required!"),
  address: yup.string().required("Address is required!"),
  city: yup.string().required("City is required!"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid!"),
});

export const registrationInputs = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your password",
  },
  {
    name: "email",
    label: "Recipient Email",
    type: "text",
    placeholder: "Recipient Email",
  },
  {
    name: "password",
    label: "password",
    type: "password",
  },
  {
    name: "passwordConfirmation",
    label: "Confirm your password",
    type: "password",
  },
];

export const registrationInputsSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required!")
    .min(6, "Username must at least be 6 characters!"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required!"),
  password: yup
    .string()
    .min(6, "Password should involves at least 6 characters!")
    .matches(/^(.*[A-Z]){3}.*$/, "Must have at least 3 uppercase letters")
    .matches(/^(.*[a-z]){3}.*$/, "Must have at least 3 uppercase letters"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginInputs = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your password",
  },
  {
    name: "password",
    label: "password",
    type: "password",
  },
];

export const loginInputsSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required!")
    .min(6, "Username must at least be 6 characters!"),

  password: yup
    .string()
    .min(6, "Password should involves at least 6 characters!")
    .matches(/^(.*[A-Z]){3}.*$/, "Must have at least 3 uppercase letters")
    .matches(/^(.*[a-z]){3}.*$/, "Must have at least 3 uppercase letters"),
});
