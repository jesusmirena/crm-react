import { Formik, Form, Field } from "formik";
import { MyFormValues } from "../types";

const ClientForm = () => {
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

      <Formik initialValues={initialValues} onSubmit={(values, actions) => {}}>
        {() => (
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
