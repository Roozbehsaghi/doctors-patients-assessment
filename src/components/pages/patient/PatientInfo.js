export const patientTitles = ["First Name", "Last Name", "ID", "Date Of Birth"];

export const formContext = [
  {
    id: "firstName",
    className: "input-container",
    label: "First Name",
    htmlFor: "firstName",
    type: "text",
    name: "firstName",
    value: "",
    autoComplete: "given-name",
  },
  {
    id: "lastName",
    className: "input-container",
    label: "Last Name",
    htmlFor: "lastName",
    type: "text",
    name: "lastName",
    value: "",
    autoComplete: "family-name",
  },
  {
    id: "email",
    className: "input-container",
    label: "Email",
    htmlFor: "email",
    type: "email",
    name: "email",
    value: "",
    autoComplete: "email",
  },
  {
    id: "password",
    className: "input-container",
    label: "Password",
    htmlFor: "password",
    type: "password",
    name: "password",
    value: "",
    autoComplete: "new-password",
  },
  {
    id: "gender",
    className: "input-container",
    label: "Gender",
    htmlFor: "gender",
    type: "dropdown",
    name: "gender",
    options: ["Male", "Female", "Other"],
    autoComplete: "sex",
  },
  {
    id: "dateOfBirth",
    className: "input-container",
    label: "Date of Birth",
    htmlFor: "dateOfBirth",
    type: "date",
    name: "dateOfBirth",
    value: "",
    autoComplete: "bday",
  },
];
