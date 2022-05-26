import React, {useState, useEffect} from 'react';
import {sendForm} from 'emailjs-com';
import './ContactForm.css';
import './Contact.css';
export function ContactForm() {
  const [sender, setSender] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  return (
      <form id="ContactForm" onSubmit={async (e) => {
        e.preventDefault();
        await sendForm("service_lmzq4q7", "template_9ch7b0l", {
          sender: sender,
          reply_to: email,
          subject: subject,
          to_name: "Jeremy",
          message: message,
        }, "GcEAPFoFBFLNO769J")
            .then((res) => {
                setResponse(res.text);
                });
      }}>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">
                Name
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                    className={`input`}
                    type="text"
                    placeholder="Your Name"
                    onChange={(e) => setSender(e.target.value)}
                    name="sender"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"/>
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">
                Email
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                    className="input"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    name="email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"/>
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">
                Subject
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                    className={`input`}
                    type="text"
                    placeholder="Subject"
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
                    name="subject"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-comments"/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="field">
            <label className="label">
              Message
            </label>
            <div className="control">
              <textarea
                  className="textarea"
                  placeholder="Message"
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  name="message"/>
            </div>
          </div>
        </div>
        <div className="buttonWrapper">
          <span className="responseMessage">{response}</span>
          <button className="button is-link verticalAlignMiddle" type="submit">
            Send
          </button>
        </div>
      </form>
  );
}