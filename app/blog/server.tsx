"use server";

import { ClientLikeComponent } from "./client";

let likes = 5;

function LikeCount(change: number) {
  console.log("LikeCount called", { likes }, { change });
  return (likes += change);
}
export { LikeCount };


function ServerLikeComponent() {
  const likeCount = LikeCount(1); // Fetch data here

  // Pass fetched data to Client Component
  return <ClientLikeComponent likes={likeCount} />;
}

export { ServerLikeComponent };