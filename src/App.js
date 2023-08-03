import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import teamMemberList from './components/DummyData';

function App() {
  const [teamMember, setTeamMember] = useState(teamMemberList)
  const [formValues, setFormValues] = useState({ name: "", job: "", email: ""})

  const change = (evt) => {
    const { name, value} = evt.target;
    setFormValues({ ...formValues, [name]: value})
  }
  const submit = (evt) => {
    evt.preventDefault();
    setTeamMember(teamMember.concat({ name: formValues.name, job: formValues.job, email: formValues.email}))
  }

  // console.log(teamMember)
  return (
    
      <div className="App">
        <h1>Our valuable team</h1>
        {teamMember.map((member, idx) => {
          return (
            <div className="wrapper">
              <h2 key={idx} className="nameAndJob">
                {member.name} is a {member.job}
              </h2>
              <div className="wrapper2">
                <h4 className="email">Need their help? Reach them here: {member.email} </h4>
              </div> 
            </div>
          )
        })}

      <form onSubmit={submit}>
        <h3>Not here? Add yourself!</h3>
          <input
          placeholder="Your name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={change}
          />
          <input 
          placeholder="Your occupation"
          name="job"
          type="text"
          value={formValues.job}
          onChange={change}
          />
          <input
          placeholder="Your email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={change}
          />
          <input
          onChange={change}
          type="submit"
          value="Create Yourself"
          />
      
      </form>
      </div>
  );
}

export default App;
