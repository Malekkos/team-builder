import logo from './logo.svg';
import './App.css';
import { useState } from "react"

const teamMemberList = [
 {name: "Jake", job: "technician", email: "JakeRul3s@hotmail.com"},
 {name: "Lissandra", job: "Ruler of the Freljord", email: "2Cool4U@gmail.com"},
 {name: "Firant", job: "Pheonix", email: "paym33nough@gmail.com"}
]


function App() {
  const [teamMember, setTeamMember] = useState(teamMemberList)
  console.log(teamMember)
  return (
    <form>
      <div className="App">
        <h1>Our valuable team</h1>
        {teamMember.map((member, idx) => {
          return (
            <div className="wrapper">
              <h2 key={idx} className="nameAndJob">
                {member.name} is a {member.job}
                <h4 className="email">Need their help? Reach them here: {member.email} </h4>
             </h2>
            </div>
          )
        })}


        <h3>Not here? Add yourself!</h3>
          <input
          placeholder="Your name"
          name="name"
          type="text"
          value=""

          />
          <input 
          placeholder="Your occupation"
          name="job"
          type="text"
          value=""
          
          />
          <input
          placeholder="Your email"
          name="email"
          type="email"
          value=""

          />

      </div>
    </form>
  );
}

export default App;
