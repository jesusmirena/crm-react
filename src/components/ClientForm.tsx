import { Formik, Form, Field } from "formik";
import { MyFormValues } from "../types";
import * as Yup from "yup";
import Error from "./Error";

const ClientForm = () => {
  const newUserSchema = Yup.object().shape({
    name: Yup.string()
      .required("This name is required!")
      .min(3, "Name too short!")
      .max(35, "Name too long!"),
    company: Yup.string().required("Company name is required!"),
    email: Yup.string()
      .email("Invalid email format!")
      .required("This field is required!"),
    phone: Yup.number()
      .positive("Invalid phone number")
      .integer("Invalid phone number")
      .typeError("Invalid phone number"),
  });

  const initialValues: MyFormValues = {
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Add a new client
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={newUserSchema}
        onSubmit={(values, actions) => {}}
      >
        {({ errors, touched }) => (
          <Form className="mt-10">
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="name">
                Name:
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Client's Name"
              />
              {errors.name && touched.name ? (
                <Error>{errors.name}</Error>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="company">
                Company:
              </label>
              <Field
                id="company"
                name="company"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Client's Company"
              />
              {errors.company && touched.company ? (
                <Error>{errors.company}</Error>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="email">
                E-mail:
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Client's Email"
              />
              {errors.email && touched.email ? (
                <Error>{errors.email}</Error>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="phone">
                Phone Number:
              </label>
              <Field
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Client's Phone"
              />
              {errors.phone && touched.phone ? (
                <Error>{errors.phone}</Error>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="notes">
                Notes:
              </label>
              <Field
                as="textarea"
                id="notes"
                name="notes"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                placeholder="Notes"
              />
            </div>
            <input
              type="submit"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ClientForm;
