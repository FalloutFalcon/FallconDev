export default function Home() {
  return (
    <div className="w-[90vw]">
      <header>
        <h1>fallcon's</h1>
      </header>

      <div className="box">
        <h3>About Me</h3>
        <p>
          I got my start coding in middle school where I faintly remember
          scratch projects with my friend from boyscouts. I always wanted to get
          good at coding because I always wanted to make my own games. I made..
          alot of progress since then and im really proud of alot of the work I
          have done so far. I spend most of my time either gaming or programming
          but I also really love D&D and gardening whenever I can.
        </p>
      </div>

      <div className="box">
        <h3>Coding</h3>
        <p>
          I only recently started learning web development, but I already have
          been drinking the full stack soup. I have extreamly mixed feelings
          about tailwind css but have been finding next.js and by proxy react to
          be a lovely tool to work with
        </p>
      </div>

      <div className="box">
        <h3>Projects</h3>
        <h4>Shiptest Github Repository - Contributor</h4>
        <a href="github.com/shiptest-ss13/Shiptest">Shiptest Github</a>
        <p>
          I made a few PRs to the Shiptest repository, including Trickwines and
          Rations!
        </p>
        <h4>TSA Vex Robotics, Antioch High School - Code Captain</h4>
        <a href="github.com/FalloutFalcon/CybearMain">Last years Github</a>
        <p>
          Autonomous and driver controls using the PROS api written in C++
          Qualified for national TSA competition. Solo developed and managed
          github repository. We are currently building our next robot but im
          still the only coder ˙◠˙
        </p>
        <h4>MNPS Archive Website - Project Lead</h4>
        <p>
          Somehow I am the most qualified person in my school to lead a web
          development project?{" "}
        </p>
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
        <img
          src="moth_hell.gif"
          className="fixed opacity-0 w-[150px] left-0 bottom-0 hover:animate-[fadeIn_3s] hover:opacity-100"
        />
        <img
          src="fallcon.png"
          alt="Gay"
          className="fixed w-[300px] right-0 bottom-0 hover:animate-[fadeIn_3s] hover:opacity-0"
        />
        <img
          src="based.png"
          className="fixed opacity-0 w-[300px] right-0 bottom-0 hover:animate-[fadeIn_3s] hover:opacity-100"
        />
      </div>

      <footer>
        <p className="pt-10">© 2023 fallcon's</p>
      </footer>
    </div>
  );
}
