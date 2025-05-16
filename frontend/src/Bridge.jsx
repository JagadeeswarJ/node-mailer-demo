import React, { useState } from "react";
import axios from "axios";

function Bridge() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    text: ''
  });

  async function handleClick() {
    const res = await axios.get("http://localhost:3000/");
    console.log(res.data);
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/mail", formData);
    console.log(res.data);
  }

  return (
    <div>
      <button onClick={handleClick}>Make req</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="subject">subject:</label>
        <input 
          type="text" 
          id="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label htmlFor="text">text:</label>
        <textarea 
          id="text"
          value={formData.text}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Bridge;
