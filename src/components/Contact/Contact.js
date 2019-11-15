import React from "react"

export default function({ handleSubmit, setForm, formValue }) {
  return (
    <div className="container contact">
      <h2>Contact</h2>
      <div className="form">
        <div>
          <div>
            <input
              placeholder=""
              type="text"
              name="name"
              value={formValue.name}
              onChange={event => setForm(event.target.value, "name")}
            />
            <label>NAME</label>
          </div>
          <div>
            <input
              placeholder=""
              type="Email"
              name="email"
              value={formValue.email}
              onChange={event => setForm(event.target.value, "email")}
            />
            <label>EMAIL</label>
          </div>
        </div>
        <div>
          <textarea
            placeholder=""
            type="text"
            name="message"
            value={formValue.message}
            onChange={event => setForm(event.target.value, "message")}
          />
          <label>MESSAGE</label>
        </div>
        <button className="btn btn-primary">Send</button>
      </div>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/eric-ackermann-b01914128/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Eric-ACKERMANN?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Eric-ACKERMANN?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <span>Eric ACKERMANN - 2019</span>
    </div>
  )
}
