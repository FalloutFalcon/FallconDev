import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import HeaderComponent from "./header";
import { ServerLikeComponent } from "./server";
import DiscordComponent from "./discord";
import MinecraftComponent from "./minecraft";

import mothHellPic from "../../public/moth_hell.gif";
import fallconPic from "../../public/fallcon.png";
import basedPic from "../../public/based.png";
import barrel from "../../public/barrelnew.png";

export const metadata: Metadata = {
  title: "fallcon's blog",
  description:
    "My personal website! Mostly just a blog but doubles as a portfolio",
};

export default function Home() {
  return (
    <div className="w-[90vw]">
      <HeaderComponent />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <div className="box">
            <h3>Projects</h3>
            <h4>Shiptest Github Repository - Maintainer</h4>
            <Link href="https://github.com/shiptest-ss13/Shiptest">
              Shiptest Github
            </Link>
            <p>
              I have done a ton of cool projects for shiptest. Trickwines are my
              baby but I&apos;ve done some other stuff like completely reworking the
              mission and bounty systems. I have also done a bunch of the boring
              stuff like bug fixes and refactors. I&apos;ve ported so many TGstation
              prs I have lost count.
            </p>
            <div className="flex h-[300px] flex-col">
              <Image
                src={barrel}
                className="boxborder h-full w-[500px] drop-shadow-xl"
                alt="Barrel Class Ship"
              />
            </div>
            <h4>Shiptest Blorbo Database</h4>
            <Link href="https://solgov.vercel.app">Website</Link>
            <p>
              Desgined as a in world database made by a spy agency to keep tabs
              on the frointer, Aka the characters people play.
            </p>
            {/* 
            <h4>Trackers</h4>
            <Link href="trackers"> Making my own slimevr trackers! </Link>*/}
          </div>
        </div>
        <div className="flex flex-col">
          <DiscordComponent />
          <div className="box flex flex-col">
            <h3>Accounts</h3>
            <Link href="https://github.com/FalloutFalcon">Github</Link>
            <Link href="https://steamcommunity.com/profiles/76561198289230657/">
              Steam
            </Link>
            <Link href="https://open.spotify.com/user/31ymvtm5x7sdv3375a4bizgr276a">
              Spotify
            </Link>
          </div>
          <a href="http://www.allaboutfrogs.org/funstuff/frogtest.php3">
            <Image
              src="http://www.allaboutfrogs.org/funstuff/frogtest/result13.jpg"
              className="boxborder h-full"
              width={200}
              height={100}
              alt="I&apos;m a Pixie Frog!"
              unoptimized
            />
          </a>
          <MinecraftComponent />
        </div>
      </div>
      <Image
        src={mothHellPic}
        className="fixed bottom-0 left-0 w-[150px] opacity-0 hover:animate-[fadeIn_3s] hover:opacity-100"
        alt="Wattsons terrible moth"
      />
      <footer>
        <ServerLikeComponent />
        <p className="pt-10 text-[pink]">© 2025 fallcon&apos;s</p>
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
