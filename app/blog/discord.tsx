"use client";

import { useEffect, useState } from "react";

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
      <div className="bg-[#6d6875] my-2.5 m-[5px] p-2.5 rounded-[5px] border border-[3px] border-[#e5989b] border-[solid] bg flex flex-row items-center fixed w-[300px] right-0 bottom-[300px]">
        <img
          src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`}
          className="rounded-full w-12 h-12"
        />
        <p>{data.discord_status}</p>
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
