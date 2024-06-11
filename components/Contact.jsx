import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { sendContactForm } from "../lib/api";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const { name, phone, email, subject, message } = form;

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSuccess(false);
    setIsError(false);

    if (validateForm()) {
      setIsLoading(true);
      try {
        await sendContactForm(form);
        setForm({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSuccess(true);
        setIsError(false);
      } catch (error) {
        console.log(error);
        setIsSuccess(false);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className={`border-2 rounded-lg p-3 border-gray-300 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    rows="10"
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-gray-100 bg-blue-500 mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                      <span className="ml-2">Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {isSuccess && (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-4">
                    <p>Message sent successfully!</p>
                  </div>
                )}
                {isError && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4">
                    <p>There was an error, please try again.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
