import Link from "next/link";
import Image from "next/image";

import HeaderComponent from "./header";
import LikeComponent from "./client";
import LikeCount from "./server";
import DiscordComponent from "./discord";

import mothHellPic from "../../public/moth_hell.gif";
import fallconPic from "../../public/fallcon.png";
import basedPic from "../../public/based.png";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fallcon's blog",
  description:
    "My personal website! Mostly just a blog but doubles as a portfolio",
};

export default function Home() {
  return (
    <div className="w-[90vw]">
      <HeaderComponent></HeaderComponent>
      <div className="flex">
        <div className="flex flex-col">
          <div className="box">
            <h3>Coding</h3>
            <p>
              I do cool stuff for shiptest which I think is my favorite code to
              write since I really like the feedback loop of coding games
            </p>
            <p>
              I only recently started learning web development, but I already
              have been drinking the full stack soup. I have extreamly mixed
              feelings about tailwind css but have been finding next.js and by
              proxy react to be a lovely tool to work with
            </p>
          </div>
          <div className="box">
            <h3>Projects</h3>
            <h4>Shiptest Github Repository - Contributor</h4>
            <Link href="https://github.com/shiptest-ss13/Shiptest">
              Shiptest Github
            </Link>
            <p>
              I have done a couple of cool things, Trickwine, Rations, Porting
              TG Species food, with Gun Smithing and a rework to golem corpses
              in the works. I have also done a bunch of the boring stuff like
              bug fixes and refactors
            </p>
            <h4>MNPS Archive Website - Project Lead</h4>
            <Link href="https://mnps-archive.vercel.app">Website</Link>
            <p>Making a cool website! Im getting paid for this one!!!!</p>
            <h4>Shiptest Blorbo Database</h4>
            <Link href="https://solgov.vercel.app">Website</Link>
            <p>
              Desgined as a in world database made by a spy agency to keep tabs
              on the frointer, Aka the characters people play.
            </p>
            <h4>Trackers</h4>
            <Link href="trackers"> Making my own slimevr trackers! </Link>
          </div>
          <div className="box">
        <h3>Accounts</h3>
        <Link href="https://github.com/FalloutFalcon">Github</Link>
        <Link href="https://steamcommunity.com/profiles/76561198289230657/">
          Steam
        </Link>
        <Link href="https://open.spotify.com/user/31ymvtm5x7sdv3375a4bizgr276a">
          Spotify
        </Link>
      </div>
        </div>
        <DiscordComponent />
      </div>


      <Image
        src={mothHellPic}
        className="fixed bottom-0 left-0 w-[150px] opacity-0 hover:animate-[fadeIn_3s] hover:opacity-100"
        alt="Wattsons terrible moth"
      />
      <footer>
        <LikeComponent likes={LikeCount(0)} />
        <p className="pt-10 text-[pink]">© 2023 fallcon&apos;s</p>
      </footer>
    </div>
  );
}

/*

        <Image
          src={fallconPic}
          className="fixed bottom-0 right-0 w-[300px] hover:animate-[fadeIn_3s] hover:opacity-0"
          alt="Gay?"
        />
        <Image
          src={basedPic}
          className="fixed bottom-0 right-0 w-[300px] opacity-0 hover:animate-[fadeIn_3s] hover:opacity-100"
          alt="Poggers"
        />
*/
