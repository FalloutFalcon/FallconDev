"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import fallconPic from "../../public/fallcon.png";

export default function DiscordComponent() {
  interface Resp {
    discord_status: "online" | "dnd" | "idle";
    username: string;
    discriminator: string;
    discord_user: {
      username: string;
      discriminator: string;
      avatar: string;
      id: string;
    };
    spotify: {
      track_id: string;
      song: string;
      artist: string;
      album_art: string;
    };
  }

  const [data, setData] = useState<Resp>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ID = "459542772781678624";

    fetch(`https://api.lanyard.rest/v1/users/${ID}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);
  return (
    !loading &&
    data && (
      <div className="m-[5px] flex w-1/4 flex-col items-center text-center">
        <h3>Discord</h3>
        {data.discord_status ? (
          <div
            className={`bg m-1 w-full rounded border-2 border-solid border-[#e5989b] bg-[#6d6875] p-2 ${
              data.discord_status === "online"
                ? "border-green-500"
                : data.discord_status === "dnd"
                  ? "border-red-500"
                  : data.discord_status === "idle"
                    ? "border-yellow-500"
                    : "border-slate-500"
            }`}
          >
            {data.discord_status}
          </div>
        ) : (
          ""
        )}
        {data.spotify ? (
          <div className="bg m-1 w-full rounded border-2 border-solid border-[#e5989b] bg-[#6d6875] p-2">
            Listening to{" "}
            <span className="font-medium text-[pink]">{data.spotify.song}</span>{" "}
            by{" "}
            <span className="font-medium text-[pink]">
              {data.spotify.artist}
            </span>
          </div>
        ) : (
          ""
        )}
        <Image src={fallconPic} className="w-[200px]" alt="Gay?" />
      </div>
    )
  );
}
/*
<div className="flex flex-col ml-2">
<p className="text-sm text-gray-400">Listening to</p>
<p className="text-sm text-gray-400">
  {data.spotify.song} by {data.spotify.artist}
</p>
</div>
*/
