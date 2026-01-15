import Link from "next/link";

function NavButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center font-extrabold text-xl font-sans overflow-hidden text-ellipsis whitespace-nowrap text-[#4b423c] hover:bg-[#ff862c] hover:text-white transition ease-in-out px-8 py-4"
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  return (
    <div className="w-full flex justify-center" role="navigation">
      <div className="max-w-[1300px] w-full flex h-15">
        <NavButton href="/">
          <img
            src="/IceStudioLogo.svg"
            alt="The Logo"
            className="h-10 w-auto"
          />
        </NavButton>
        <NavButton href="/Silent-Citadel">Silent Citadel</NavButton>
        <NavButton href="/Zombie-Pleague">Zombie Pleague</NavButton>
        <NavButton href="/">test3</NavButton>
        <NavButton href="/">test4</NavButton>
      </div>
    </div>
  );
}
