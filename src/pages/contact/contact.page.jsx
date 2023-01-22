// import React, { useState } from "react";
import "../contact/contact.style.css";

export const Contact = () => {
  //     const [info, setinfo] = useState({
  //       name: "",
  //       phone: "",
  //       email: "",
  //       subject: "",
  //       message: ""
  //     });

  //     const InputChnage = (event) => {
  //       console.log(event.target.value);
  //       console.log(event.target.name);

  //       const { value, name } = event.target;

  //       setinfo((preValue) => {
  //         return {
  //           ...preValue,
  //           [name]: value
  //         };
  //       });

  //       const onChange =() =>{
  //           event.preventDefault();
  //       }

  return (
    <>
      {/* <p>Hello, {}</p> */}
      <div className="container">
        <div className="contact-box">
          <div className="contact-left">
            <h3>Connect With Us</h3>
            <form>
              <div className="contact-row">
                <div className="contact-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" name="name" />
                </div>
                <div className="contact-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="Your Phone No."
                    name="phone"
                  />
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your email" name="email" />
                </div>
                <div className="contact-group">
                  <label className="input-lab">Subject</label>
                  <input
                    type="text"
                    placeholder="Please write Subject here"
                    className="input-message"
                    name="message"
                  />
                </div>
              </div>
              <label>Message</label>
              <textarea rows="5" placeholder="your message..."></textarea>

              <button className="button" type="submit">Send</button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tr className="data1">
                <td>Email</td>
                <td>fahadmallhi677@gmail.com</td>
              </tr>
              <tr className="data2">
                <td>Phone</td>
                <td>+923126288677</td>
              </tr>
              <tr className="data3">
                <td>Adress</td>
                <td>
                   Garden Town
                  <br />
                  Sialkot By-Pass road
                  <br />
                  Gujranwala,Punjab,Pakistan{" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};





// const { Component } = require("react");

// export class Contact extends Component{
//     render(){
//         return(
//             <h1>0303030303</h1>
//         )
//     }
// }
