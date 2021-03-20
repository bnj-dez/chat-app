import React from 'react';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
          name="Elizabeth Mcdonalid"
          avatar="https://randomuser.me/api/portraits/women/32.jpg"
          status
      />
      <Contact
          name="Louis Caldwell"
          avatar="https://randomuser.me/api/portraits/men/24.jpg"
          status={false}
      />
      <Contact
          name="Hannah Hernandez"
          avatar="https://randomuser.me/api/portraits/women/62.jpg"
          status
      />
    </div>
  );
}

export default App;
