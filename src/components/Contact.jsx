import "./Contact.scss";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <form
      className="flex flex-col items-center w-full bg-dark pb-52"
      onSubmit={handleSubmit}
    >
      <div className="w-1/3 flex flex-col items-center gap-5">
        <p className="text-4xl text-light">Contact</p>
        <p className="text-xl text-secondary">
          Have a question or want to work together?
        </p>

        <input
          className="caret-secondary text-primary p-2 w-full bg-dark shadow-pressedMedDark rounded-lg h-10 focus:shadow-medDark"
          required
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="caret-secondary text-primary p-2 w-full bg-dark shadow-pressedMedDark rounded-lg h-10 focus:shadow-medDark"
          required
          placeholder="Your email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="caret-secondary text-primary p-2 w-full bg-dark shadow-pressedMedDark rounded-lg h-36  focus:shadow-medDark"
          required
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <button className="p-3 m-4 shadow-smallDark rounded-md text-primary text-xl hover:shadow-medDark transition duration-300 active:shadow-pressedMedDark">
        submit
      </button>
    </form>
  );
}
