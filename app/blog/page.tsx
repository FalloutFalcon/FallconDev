import HeaderComponent from "./header";
import LikeComponent from "./client";

export default function Home() {
  return (
    <div className="w-[90vw]">
      <HeaderComponent></HeaderComponent>

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
          I do cool stuff for shiptest which I think is my favorite code to
          write since I really like the feedback loop of coding games
        </p>
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
        <a href="https://github.com/shiptest-ss13/Shiptest">Shiptest Github</a>
        <p>
          I have done a couple of cool things, Trickwine, Rations, Porting TG
          Species food, with Gun Smithing and a rework to golem corpses in the
          works. I have also done a bunch of the boring stuff like bug fixes and
          refactors
        </p>
        <h4>TSA Vex Robotics - Code Captain</h4>
        <a href="https://github.com/FalloutFalcon/CybearMain">
          Last years Github
        </a>
        <p>
          Autonomous and driver controls using the PROS api written in C++
          Qualified for national TSA competition. Solo developed and managed
          github repository. We are currently building our next robot but im
          still the only coder ˙◠˙
        </p>
        <h4>MNPS Archive Website - Project Lead</h4>
        <a href="https://mnps-archive.vercel.app">Website</a>
        <p>Making a cool website! Im getting paid for this one!!!!</p>
        <h4>Shiptest Blorbo Database</h4>
        <a href="https://solgov.vercel.app">Website</a>
        <p>
          Desgined as a in world database made by a spy agency to keep tabs on
          the frointer, Aka the characters people play.
        </p>
        <h4>Trackers</h4>
        <a href="trackers"> Making my own slimevr trackers! </a>
      </div>

      <div className="box">
        <h3>Accounts</h3>
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
        <LikeComponent></LikeComponent>
        <p className="pt-10">© 2023 fallcon&apos;s</p>
      </footer>
    </div>
  );
}
