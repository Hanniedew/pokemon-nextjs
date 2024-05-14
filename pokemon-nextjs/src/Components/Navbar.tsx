import Image from "next/image";
import HomeIcon from "../Icons/home.svg";
import Link from "next/link";

function Navbar() {
  return (
    <div className="h-28 flex justify-center items-center border-b-4 border-neutral-700 bg-neutral-200">
      <h1 className="text-4xl">Pokédex</h1>
      <div className="absolute right-4 top-20 cursor-pointer">
        <Link href={`/`}>
          <Image src={HomeIcon} width={25} height={25} alt="Home Icon" />
        </Link>{" "}
      </div>
    </div>
  );
}

export default Navbar;
