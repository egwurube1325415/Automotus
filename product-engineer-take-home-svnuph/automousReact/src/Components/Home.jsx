import React from "react";
import "../assets/styles.css";
import img from "../assets/img/illustration-devices.svg";

function Home() {
  return (
    <div>
      <main>
        <div class="content">
          <div class="pre-heading">
            <h4 class="new">New</h4>
            <h4 class="pre">Monograph Dashboard</h4>
          </div>
          <h1>Powerful insights into your team</h1>
          <p>Project planning and time tracking for agile teams</p>
          <div class="btn-pre">
            <button class="btn">Schedule a demo</button>
            <h4 class="pre live">to see a live preview</h4>
          </div>
        </div>
        <div class="img">
          <img src={img} alt="" />
        </div>
      </main>
    </div>
  );
}

export default Home;
