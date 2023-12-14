import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/fallcon.png";
import profilePicAlt from "../public/fallcon2.jpg";
import profilePicEvil from "../public/fallconEvil.png";

export default function Home() {
  return (
    <div className="m-0 h-auto flex-col items-center text-center">
      <Link href="blog"> agh </Link>
      <Image
        className="mx-auto w-1/4"
        src={profilePicEvil}
        alt="Picture of the author"
      />
    </div>
  );
}
