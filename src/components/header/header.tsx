import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <div className="shadow-lg bg-white z-[50] ">
      <div className="w-full h-[9vh] px-16 flex justify-between items-center">
        <Link href="/">
          <div className="logo cursor-pointer">
            <p className="text-2xl font-bold">ADMIN.</p>
          </div>
        </Link>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Header