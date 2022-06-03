import { useState } from "react";
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [recaptchaToken, setRecaptchaToken] = useState();

  const formId = `${process.env.REACT_APP_FORM_ID}`;
  const formSparkUrl = `https://submit-form.com/${formId}`;
  // const recaptchaKey = `${process.env.REACT_APP_RECAPTCHA_KEY}`;
  // const recaptchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, message, formId, recaptchaToken);
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      // "g-recaptcha-response": recaptchaToken,
      name,
      email,
      message,
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  // const updateRecaptchaToken = (token) => {
  //   setRecaptchaToken(token);
  // };

  return (
    <form
      className="flex flex-col items-center w-full bg-dark"
      onSubmit={handleSubmit}
    >
      <div className="w-4/5 flex rounded-xl p-4 flex-col group hover:shadow-smallDark items-center transition gap-5">
        <p className="text-4xl text-light">Contact</p>
        <p className="text-xl text-secondary">
          Have a question or want to work together?
        </p>

        <input
          className="caret-secondary text-primary p-2 w-full bg-dark transition duration-600 hover:shadow-pressedMedDark rounded-lg h-10 focus:shadow-medDark"
          required
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="caret-secondary text-primary p-2 w-full bg-dark transition duration-600 hover:shadow-pressedMedDark rounded-lg h-10 focus:shadow-medDark"
          required
          placeholder="Your email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="caret-secondary text-primary p-2 w-full bg-dark transition duration-600 hover:shadow-pressedMedDark rounded-lg h-36  focus:shadow-medDark"
          required
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        {/* <ReCAPTCHA
        className="p-2 transition duration-1000 group-hover:shadow-medDark rounded-xl"
          ref={recaptchaRef}
          sitekey={recaptchaKey}
          onChange={updateRecaptchaToken}
          theme="dark"
          size='compact'
        /> */}
        <button
          type="submit"
          className="p-3 m-4 rounded-md text-primary text-xl transition duration-1000 transition duration-300 focus:shadow-pressedMedDark active:shadow-pressedMedDark"
        >
          send me a message
        </button>
      </div>
    </form>
  );
}
