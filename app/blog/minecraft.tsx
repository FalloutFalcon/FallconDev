"use client";

import { useEffect, useState } from "react";

export default function MinecraftComponent() {
  interface Resp {
    online: boolean;
    ip: string;
    port: number;
    hostname?: string;
    debug: {
      ping: boolean;
      query: boolean;
      bedrock: boolean;
      srv: boolean;
      querymismatch: boolean;
      ipinsrv: boolean;
      cnameinsrv: boolean;
      animatedmotd: boolean;
      cachehit: boolean;
      cachetime: number;
      cacheexpire: number;
      apiversion: number;
    };
    version?: string;
    protocol?: {
      version: number;
      name?: string;
    };
    icon?: string;
    software?: string;
    map?: {
      raw: string;
      clean: string;
      html: string;
    };
    gamemode?: string;
    serverid?: string;
    eula_blocked?: boolean;
    motd?: {
      raw: string[];
      clean: string[];
      html: string[];
    };
    players?: {
      online: number;
      max: number;
      list?: {
        name: string;
        uuid: string;
      }[];
    };
    plugins?: {
      name: string;
      version: string;
    }[];
    mods?: {
      name: string;
      version: string;
    }[];
    info?: {
      raw: string[];
      clean: string[];
      html: string[];
    };
  }

  const [data, setData] = useState<Resp>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/minecraft-status?address=37.27.129.146")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, []);
  return (
    !loading &&
    data && (
      <div className="m-[5px] flex flex-col items-center text-center">
        <h4>Server Status</h4>
        <div
          className={`bg m-1 w-full rounded border-2 border-solid p-2 ${
            data.online ? "border-green-500" : "border-red-500"
          }`}
        >
          <p className="font-semibold">
            {data.online ? "Online" : "Offline"}
          </p>
          {data.online && data.players && (
            <p>
              Players Online: {data.players.online}/{data.players.max}
            </p>
          )}
        </div>
      </div>
    )
  );
}
