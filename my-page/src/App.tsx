import React from "react";

import DATA from "./store/data.json";

import "./App.css";

function App() {
  return (
    <>
      {DATA.map((datas) => {
        return (
          <>
            <div className="container">
            <h1>About me:</h1>
            <section>
              <h2>{datas["first name"]}</h2>
              <p>{datas["short biography"]}</p>
            </section>
            <section>
              <h2>My contacts:</h2>
              <p>{`📞 phone: ${datas["public contacts"].phone}, 📩email: ${datas["public contacts"].email}`}</p>
            </section>
          </div>
          </>
        );
      })}
    </>
  );
}

export default App;
