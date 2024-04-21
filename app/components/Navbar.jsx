import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between nav__content">
        <Link href="/">
          <div className="nav__logo">Mariam Hammoud</div>
        </Link>

        <div className="flex gap-4">
          <Link href="/">
            <span className="nav__link">About</span>
          </Link>
          <Link href="#project">
            <span className="nav__link">My work</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
