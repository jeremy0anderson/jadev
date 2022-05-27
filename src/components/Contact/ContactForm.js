import React, {useState} from 'react';
import emailjs, {sendForm} from 'emailjs-com';
import './ContactForm.css';
import './Contact.css';
export function ContactForm() {
  const [sender, setSender] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
emailjs.init("GcEAPFoFBFLNO769J");
  const formHandler = async (e) => {
      e.preventDefault();
      await emailjs.send("service_lmzq4q7", "template_9ch7b0l",
          {
              sender: sender,
              reply_to: email,
              subject:subject,
              message:message
          },
          "GcEAPFoFBFLNO769J", )
          .then((res) => {
              if (res.text === "OK")
              setResponse("Message Sent!");
              setSender('');
              setMessage('');
              setEmail('');
              setSubject('');
          }, (err)=>{
              setResponse(err);
          });
  }
  return (
      <div className="card">
      <div className="form-container">
      <form id="ContactForm" onSubmit={async(e)=>{
          await formHandler(e);

      }}>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">
                Name
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    required
                    minLength="2"
                    maxLength="30"
                    onBlur={(e)=>{
                      if (!e.target.value.length ) {
                        setNameError('Name Required');
                      } else {
                        setNameError("")
                      }

                    }}
                    onChange={(e) => {
                        setSender(e.target.value)
                        setNameError('');
                    }}
                    name="sender"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"/>
                </span>
              </div>
              <p className="error" style={{color:"red"}}>{nameError}</p>
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
                    onBlur={(e)=>{
                      if (e.target.value.length && !e.target.value.match(/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/)){
                        setEmailError("Please Enter a Valid Email");
                      } else if (!e.target.value.length){
                        setEmailError("Email Required")
                      } else{
                        setEmailError("");
                      }
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value)
                        setEmailError('');
                    }}
                    name="reply_to"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"/>
                </span>
              </div>
            </div>
            <p className="error">{emailError}</p>
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
                    onBlur={(e)=>{
                        if (!e.target.value.length ) {
                            setSubjectError('Subject Required');
                        } else {
                            setSubjectError("")
                        }

                    }}
                    onChange={(e) => {
                      setSubject(e.target.value)
                      setSubjectError("");
                    }}
                    name="subject"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-comments"/>
                </span>
              </div>
            </div>
              <p className="error">{subjectError}</p>
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
                  onBlur={(e)=>{
                      if (!e.target.value.length ) {
                          setMessageError('Message Required');
                      } else {
                          setMessageError("")
                      }
                  }}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    setMessageError('');
                  }}
                  name="message"/>
            </div>
              <p className="error">{messageError}</p>
          </div>
        </div>
        <div className="buttonWrapper">
          <span className="responseMessage">{response}</span>
          <button className="button is-link verticalAlignMiddle" type="submit">
            Send
          </button>
        </div>
      </form>
      </div>
      </div>
  );
}
