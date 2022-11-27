import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: sessionData } = useSession();

  return (
    <header className="flex h-24 w-full items-center justify-center bg-stone-900 px-4">
      <div className="flex w-9/12 justify-between">
        <Link href={"/"}>
          <a className="text-4xl font-bold text-white">Guest Book</a>
        </Link>
        {/* Menu items */}
        <nav className="flex items-center gap-4">
          <Link href="/">
            <button className="text-lg font-medium text-white">Home</button>
          </Link>
          <Link href="/about">
            <button className="text-lg font-medium text-white">About</button>
          </Link>
          {sessionData ? (
            <>
              <div className="flex gap-2">
                <Image
                  className="rounded-full"
                  src={sessionData.user?.image as string}
                  alt="avatar"
                  width={28}
                  height={24}
                />
                <Link href={`/profile/${sessionData.user?.id}`}>
                  <a className="text-lg font-medium text-white">
                    {sessionData.user?.name}
                  </a>
                </Link>
              </div>
              <button
                onClick={() => {
                  signOut();
                }}
                className=" text-lg font-medium text-white"
              >
                Çıkış Yap
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="relative text-lg font-medium text-white"
            >
              Login
              <div
                className={`absolute mt-2 divide-y-[1px] rounded-md bg-yellow-700 ${
                  isOpen ? "visible" : "invisible"
                }`}
              >
                <div onClick={() => signIn()} className="px-4 py-2">
                  Discord
                </div>
                <div className="px-4 py-2">Github</div>
                <div className="px-4 py-2">Google</div>
              </div>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
