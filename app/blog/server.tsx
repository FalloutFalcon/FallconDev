"use server"

let likes = 5;

function LikeCount(change: number) {
    return (
        likes += change
    );
}
export default LikeCount;