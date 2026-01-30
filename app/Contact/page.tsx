import React from "react";
import Form from "../components/Form";

export default function Contact() {
  return (
    <div className="w-full flex justify-center px-2 ">
      <div className="max-w-[1300px] w-full flex flex-col">
        <div>
          <div role="main" className="p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Contact Us
            </h1>

            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
}
