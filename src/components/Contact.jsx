import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const formId = `${process.env.REACT_APP_FORM_ID}`;
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postSubmission();
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  const postSubmission = async () => {
    const payload = {
      name,
      email,
      message,
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (err) {
      return err.message;
    }
  };

  return (
    <form
      id="contact"
      className="flex flex-col items-center w-full pb-20"
      onSubmit={handleSubmit}
    >
      <div className="md:w-1/2 w-full backdrop-blur-[100px] flex rounded-xl p-5 flex-col group items-center gap-5 bg-secondary">
        <p className="text-4xl text-dark">Contact</p>
        <p className="text-xl text-dark">
          Do you want to work together?
        </p>
        {success && (
          <div className="bg-green-500 rounded-lg border-green text-light p-3">
            Your message has been sent
          </div>
        )}
        <input
          className="caret-secondary text-primary p-2 w-full bg-slate-700 transition-shadow duration-1000 hover:shadow-shadow rounded-lg h-10 outline-none"
          required
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="caret-secondary text-primary p-2 w-full bg-slate-700  transition-shadow duration-1000 hover:shadow-shadow rounded-lg h-10 outline-none"
          required
          placeholder="Your email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="caret-secondary text-primary p-2 w-full bg-slate-700  transition-shadow duration-1000 hover:shadow-shadow rounded-lg h-36  outline-none"
          required
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          type="submit"
          className="p-3 m-4 rounded-md text-xl transition-shadow duration-1000 hover:shadow-shadow focus:shadow-medDark active:shadow-pressedMedDark"
        >
          send me a message
        </button>
      </div>
    </form>
  );
}
