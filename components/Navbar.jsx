import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-5 absolute z-30">
      <ul className="flex items-center gap-[67px]">
        <li>
          <Link href="#">
            <img src="/images/LOGO.png" alt="" />
          </Link>
        </li>
        <li>
          <Link className="text text-base text-white" href="#">
            apply
          </Link>
        </li>
        <li>
          <Link className="text text-base text-white" href="#">
            twitter
          </Link>
        </li>
        <li>
          <Link className="text text-base text-white" href="#">
            discord
          </Link>
        </li>
        <li>
          <Link className="text text-base text-white" href="#">
            telegram
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
