import { useState } from "react";
import axios from "axios";

const Form = () => {
  // form states
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Email: mail,
      Name: name,
      Phone: phone,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/a7469226-bea7-481f-997f-d7b3b3808993",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setMail("");
        setPhone("");
      });
  };

  return (
    <div className=" bg-white rounded-md shadow w-full p-2 ">
      <form onSubmit={handleSubmit} className="bg-white mt-2 p-2">

        <div className="flex items-center border-2 py-2 px-3 mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="flex items-center border-2 py-2 px-3 mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="mail"
            id="mail"
            placeholder="Email Id"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </div>

        <div className="flex items-center border-2 py-2 px-3 mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="number"
            name="phoneNum"
            id="phoneNum"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <button
          type="submit"
          className="block bg-slate-900 hover:bg-gray-700 mt-4 py-2 text-white font-semibold mb-2 px-4 rounded"
        >
          Enquire
        </button>
      </form>
    </div>
  );
};

export default Form;


