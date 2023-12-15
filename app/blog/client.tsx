"use client";

import React, { useState } from "react";

import { LikeCount } from "./server";

export const revalidate = 0;

function ClientLikeComponent({ likes }: { likes: number }) {
  const [likeCount, setLikes] = useState(likes);
  function handleClick() {
    const newCount = likeCount + 1;
    setLikes(newCount);
    LikeCount(1);
  }
  return (
    <div>
      <p>Button????</p>
      <button
        className="w-1/12 rounded border-2 border-solid border-[#e5989b]"
        onClick={handleClick}
      >
        {likeCount}
      </button>
    </div>
  );
}
export { ClientLikeComponent };
