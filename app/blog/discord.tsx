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
      <div className=" fixed bottom-[300px] right-0 m-[5px] my-2.5 flex w-[300px] flex-col items-center p-2.5 m-2">
        {data.discord_status ? (
          <div className="bg w-full rounded-[5px] border border-[3px] border-[#e5989b] border-[solid] bg-[#6d6875] p-2.5 m-2">
            {data.discord_status}
          </div>
        ) : (
          ""
        )}
        {data.spotify ? (
          <div className="bg w-full rounded-[5px] border border-[3px] border-[#e5989b] border-[solid] bg-[#6d6875] p-2.5 m-2">
            Listening to {data.spotify.song} by {data.spotify.artist}
          </div>
        ) : (
          ""
        )}
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
