"use client";
import React from "react";

function LikeComponent() {
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <p>Button????</p>
      <button className="border border-[pink] w-1/12" onClick={handleClick}>{likes}</button>
    </div>
  );
}
export default LikeComponent;
