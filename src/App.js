import React, { useState } from "react";
import Data from "./Data.js";
import List from "./List.js";


function App() {
  const [people, setpeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setpeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
