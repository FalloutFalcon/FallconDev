export default function Home() {
  return (
    <div className="allTheStuff">
      <header>
        <h1 className="text-5xl p-5">fallcon's</h1>
      </header>
      <div className="box">
        <h3>
          Welcome to my <strong>blog</strong>
        </h3>
        <p>
          This is my little dev website. I'll be posting about my projects and
          other stuff here.
        </p>
      </div>
      <div className="box">
        <h3>About Me</h3>
        <p>I enjoy Team Fortress 2!</p>
      </div>
      <div className="box">
        <h3>Projects</h3>
        <h2>JULY 2023 - PRESENT Shiptest Github Repository - Contributor</h2>
        <a>github.com/shiptest-ss13/Shiptest</a>
        <p>
          Fixed bugs, developed new features, and refactored old code Repository
          contains 75000+ commits and written in the Dream Maker programming
          language Working with other contributors and quickly responding to
          feedback
        </p>
        <h2>
          AUGUST 2022 - PRESENT TSA Vex Robotics, Antioch HIgh School - Code
          Captain
        </h2>
        <a>github.com/FalloutFalcon/CybearMain</a>
        <p>
          Developed Autonomous and driver controls using the PROS api written in
          C++ Qualified for national TSA competition Solo developed and managed
          github repository
        </p>
        <p>Robotics!</p>
      </div>
      <div className="box">
        <h3>Info</h3>
        <a href="https://github.com/FalloutFalcon">Github</a>
        <a href="https://steamcommunity.com/profiles/76561198289230657/">
          Steam
        </a>
        <a href="https://open.spotify.com/user/31ymvtm5x7sdv3375a4bizgr276a">
          Spotify
        </a>
        <img src="moth_hell.gif" className="moth" />
        <a href="based.png">
          {" "}
          <img src="fallcon.png" alt="Gay" className="alstolfo" />{" "}
        </a>
      </div>
      <footer>
        <p>© 2023 fallcon</p>
      </footer>
    </div>
  );
}
