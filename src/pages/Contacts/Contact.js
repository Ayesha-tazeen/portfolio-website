



import React, { useState } from 'react';
import Footer from '../../components/Footer';

export default function BasicForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/BchJL96T9BS", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        }
        else if (response.code === 422) {
          // Field validation failed
          setError(response.message)
        }
        else {
          // other error from formcarry
          setError(response.message)
        }
      })
      .catch(error => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }


  return (
   
    <>

      <div className="max-w-md mx-auto bg-semihead text-head p-6 border rounded-sm md:max-w-lg lg:max-w-xl shadow-lg shadow-white">
        <h2 className="md:text-4xl text-white name font-bold font-serif mb-6 text-center">Contact Me</h2>
        <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-head">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-4 rounded-md w-full  border focus:outline-none focus:border-blue-500 bg-head text-wall placeholder-white"
              placeholder="Your Name"

            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-head">
              Email:
            </label>
            <input type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-4 rounded-md w-full  border focus:outline-none focus:border-blue-500 bg-head text-wall placeholder-white"
              placeholder="Your Email"

            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-head">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="mt-1 p-4 rounded-md w-full  border focus:outline-none focus:border-blue-500 bg-head text-wall placeholder-white"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-head text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>


      <Footer />

    </>
  )

}