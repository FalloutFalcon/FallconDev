import Image from "next/image";
import profilePic from "../public/fallcon.png";
import profilePicAlt from "../public/fallcon2.jpg";
import profilePicEvil from "../public/fallconEvil.png";

export default function Home() {
  return (
    <div className="flex-col text-center items-center h-auto m-0">
      <a href="blog"> agh </a>
      <Image
        className="w-1/4 mx-auto"
        src={profilePicEvil}
        alt="Picture of the author"
      />
    </div>
  );
}
