"use client";
import React from "react";
import LikeCount from "./server";

export const revalidate = 0;

function LikeComponent({ likes }: { likes: number }) {
  const [likeCount, setLikes] = React.useState(likes);
  function handleClick() {
    const newCount = likeCount + 1;
    setLikes(newCount);
    LikeCount(1);
  }
  return (
    <div>
      <p>Button????</p>
      <button className="w-1/12 border border-[pink]" onClick={handleClick}>
        {likeCount}
      </button>
    </div>
  );
}
export default LikeComponent;
