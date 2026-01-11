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
    <div className="flex h-15" role="navigation">
      <NavButton href="/">
        <img src="/IceStudioLogo.svg" alt="The Logo" className="h-8 w-auto" />
        <span className="text-[#00436e]">Ice Studio</span>
      </NavButton>
      <NavButton href="/TopDownShooter">TopDownShooter</NavButton>
      <NavButton href="/">test2</NavButton>
      <NavButton href="/">test3</NavButton>
      <NavButton href="/">test4</NavButton>
    </div>
  );
}
