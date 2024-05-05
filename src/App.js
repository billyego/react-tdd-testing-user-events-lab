import React, { useState } from "react";

function App() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [formissubmited,setformissubmited]=useState(false)
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInterests([...selectedInterests, value]);
    } else {
      setSelectedInterests(selectedInterests.filter((interest) => interest !== value));
    }
  };
  function handlesubmit(e){
    e.preventDefault()
    setformissubmited(true)
  }

  return (
    <main >
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      
      <form id="form">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
      </form>
      <h2>Select your Interests</h2>
      <form onSubmit={handlesubmit}>
      <label>
        <input type="checkbox" value="music" checked={selectedInterests.includes("music")} onChange={handleCheckboxChange} />
        Music
      </label>
      <label>
        <input type="checkbox" value="sports" checked={selectedInterests.includes("sports")} onChange={handleCheckboxChange} />
        Sports
      </label>
      <label>
        <input type="checkbox" value="cooking" checked={selectedInterests.includes("cooking")} onChange={handleCheckboxChange} />
        Cooking
      </label>
      <label>
        <input type="checkbox" value="driving" checked={selectedInterests.includes("driving")} onChange={handleCheckboxChange}/>
        Driving
      </label>
      <h3>Selected Interests</h3>
      <ul>
        {selectedInterests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <button type="submit" >submit</button>
      {formissubmited? <p>DONE!</p> : null}
      </form>
    </main>
  );
}

export default App ;import React, { useState } from "react";

function App() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [formissubmited,setformissubmited]=useState(false)
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInterests([...selectedInterests, value]);
    } else {
      setSelectedInterests(selectedInterests.filter((interest) => interest !== value));
    }
  };
  function handlesubmit(e){
    e.preventDefault()
    setformissubmited(true)
  }

  return (
    <main >
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      
      <form id="form">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
      </form>
      <h2>Select your Interests</h2>
      <form onSubmit={handlesubmit}>
      <label>
        <input type="checkbox" value="music" checked={selectedInterests.includes("music")} onChange={handleCheckboxChange} />
        Music
      </label>
      <label>
        <input type="checkbox" value="sports" checked={selectedInterests.includes("sports")} onChange={handleCheckboxChange} />
        Sports
      </label>
      <label>
        <input type="checkbox" value="cooking" checked={selectedInterests.includes("cooking")} onChange={handleCheckboxChange} />
        Cooking
      </label>
      <label>
        <input type="checkbox" value="driving" checked={selectedInterests.includes("driving")} onChange={handleCheckboxChange}/>
        Driving
      </label>
      <h3>Selected Interests</h3>
      <ul>
        {selectedInterests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <button type="submit" >submit</button>
      {formissubmited? <p>DONE!</p> : null}
      </form>
    </main>
  );
}
export default App;