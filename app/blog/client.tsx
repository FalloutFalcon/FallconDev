"use client";
import React from "react";
import LikeCount from "./server";

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
      <button className="border border-[pink] w-1/12" onClick={handleClick}>
        {likeCount}
      </button>
    </div>
  );
}
export default LikeComponent;
