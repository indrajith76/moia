import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-2 md:p-5 absolute z-30">
      <ul className="flex items-center gap-3  md:gap-[67px]">
        <li>
          <Link href="#">
            <img className="w-7 md:w-auto" src="/images/LOGO.png" alt="" />
          </Link>
        </li>
        <li>
          <Link className="text-[13px] md:text-base text-white" href="#">
            apply
          </Link>
        </li>
        <li>
          <Link className="text-[13px] md:text-base text-white" href="#">
            twitter
          </Link>
        </li>
        <li>
          <Link className="text-[13px] md:text-base text-white" href="#">
            discord
          </Link>
        </li>
        <li>
          <Link className="text-[13px] md:text-base text-white" href="#">
            telegram
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
