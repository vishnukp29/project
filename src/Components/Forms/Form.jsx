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
    <div className=" bg-[#0E57A3]  shadow w-full md:w-3/4 p-2 ">
      <form onSubmit={handleSubmit} className="bg-[#0E57A3] mt-2 p-2">

        <div className="flex items-center py-2 px-3 mb-4 bg-white rounded">
          <input
            className="pl-2 outline-none border-none w-full "
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required='true'
          />
        </div>

        <div className="flex items-center py-2 px-3 mb-4 bg-white rounded">
          <input
            className="pl-2 outline-none border-none w-full "
            type="text"
            name="mail"
            id="mail"
            placeholder="Email Id"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            required='true'
          />
        </div>

        <div className="flex items-center py-2 px-3 mb-4 bg-white rounded">
          <input
            className="pl-2 outline-none border-none w-full "
            type="number"
            name="phoneNum"
            id="phoneNum"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required='true'
          />
        </div>

        <div className="flex items-center justify-end ">
        <button
          type="submit"
          className="block bg-white hover:bg-gray-100 mt-4 py-2 text-gray-700 mb-2 px-4 "
        >
          Enquire
        </button>
        </div>
      </form>
    </div>
  );
};

export default Form;


