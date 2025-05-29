import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
  
    const validationErrors = validate(data);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/xwpognez", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: form,
        });
  
        if (response.ok) {
          setSubmitted(true);
          toast.success("Message sent successfully! 🚀");
        } else {
          toast.error("Failed to send. Try again later.");
        }
      } catch (err) {
        toast.error("Something went wrong.");
      }
    }
  };  

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <p className="text-blue-500 uppercase font-semibold text-sm tracking-wide mb-2">
          05. Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Let's Work Together
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`w-full p-3 rounded bg-gray-100 dark:bg-gray-800 border ${
                  errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`w-full p-3 rounded bg-gray-100 dark:bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className={`w-full p-3 rounded bg-gray-100 dark:bg-gray-800 border ${
                  errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-all"
            >
              Send Message
            </button>
          </form>
        ) : (
          <motion.p
            className="text-green-500 mt-6 text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message sent! I’ll get back to you soon.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;