import React from "react";
import ClientForm from "../components/ClientForm";

const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">New Client</h1>
      <p className="mt-3">Fill this fields to register a new client.</p>
      <ClientForm />
    </>
  );
};

export default NewClient;
