"use server"

let likes = 5;

function LikeCount(change: number) {
    console.log("LikeCount called", { likes }, { change });
    return (
        likes += change
    );
}
export default LikeCount;