"use server";

import { useEffect, useState } from "react";

import { ClientLikeComponent } from "./client";

let likes = 5;

function LikeCount(change: number) {
  console.log("LikeCount called", { likes }, { change });
  return (likes += change);
}
export { LikeCount };

function ServerLikeComponent() {
  const [likeCount, setLikeCount] = useState(LikeCount(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setLikeCount(LikeCount(0));
    }, 1000); // Revalidate every 1 second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Pass fetched data to Client Component
  return <ClientLikeComponent likes={likeCount} />;
}
export { ServerLikeComponent };
