import { useState } from "react";

//helper function to check if the email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
    setErrorMessage('');
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // check if the email is not valid. If so set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return; // exit if non valid email
      
    }

    if(!name|| !message) //check if either name or message are still blank
    { setErrorMessage('incomplete form')
      return;}

      //update the use that their message has been received.
    setErrorMessage(`Thankyou for your message ${name}, I'll respond shortly.`);

    // clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };


  //functionb to hancle cursor losing focus
  const handleCurserMove = (e) => {

    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, set the error message to match
    if (inputType === "name") {
      if(!inputValue) setErrorMessage("Name can't be Blank");
    } else if (inputType === "email") {
      if (!inputValue) setErrorMessage("Email can't be Blank");
    } else {
      if (!inputValue) setErrorMessage("Message can't be Blank");
    }



  };

  //return form html
  return (
<div className="container">
      <h2>Contact Me</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input className="form-control" value={name} name="name" onChange={handleInputChange} onBlur={handleCurserMove} type="text" placeholder="name" />
        </div>
        <div className="form-group">
          <input className="form-control" value={email} name="email" onChange={handleInputChange} onBlur={handleCurserMove} type="email" placeholder="email" />
        </div>
        <div className="form-group">
          <textarea className="form-control" value={message} name="message" onChange={handleInputChange} onBlur={handleCurserMove} type="text" placeholder="Message" rows="10"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    

  );
}

export default Contact;
