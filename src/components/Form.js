import React from "react";

const Form = (props) => {

    return (
      <form onSubmit={props.submit}>
        <label className="label">Name
          <input
          placeholder="Your name"
          name="name"
          type="text"
          value={props.formValues.name}
          onChange={props.change}
          />
          </label>
          <label className="label">Job
          <input 
          placeholder="Your occupation"
          name="job"
          type="text"
          value={props.formValues.job}
          onChange={props.change}
          />
          </label>
          <label className="label">Email
          <input
          placeholder="Your email"
          name="email"
          type="email"
          value={props.formValues.email}
          onChange={props.change}
          />
          </label>
          <input
          onChange={props.change}
          type="submit"
          value="Create Yourself"
          />
      
      </form>
    )
}
export default Form;