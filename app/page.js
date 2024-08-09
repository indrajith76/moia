import Navbar from "@/components/Navbar";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="home-bg relative h-[1024px]">
      <>
        <img
          className="absolute -top-[148px] left-5 z-0"
          src="/images/moia-bg.png"
          alt=""
        />
        <img
          className="absolute top-[179px] left-5 z-0"
          src="/images/moia-bg.png"
          alt=""
        />
        <img
          className="absolute top-[506px] left-5 z-0"
          src="/images/moia-bg2.png"
          alt=""
        />
        <img
          className="absolute top-0 left-[1180px]"
          src="/images/Star-4.png"
          alt=""
        />
        <img
          className="absolute left-0 top-[180px]"
          src="/images/Star-5.png"
          alt=""
        />
        <img
          className="absolute top-[380px] right-24"
          src="/images/Star-2.png"
          alt=""
        />
        <img
          className="absolute left-[210px] top-[560px]"
          src="/images/Star-3.png"
          alt=""
        />
      </>
      <Navbar />

      <div className="absolute top-28 lg:top-[190px] left-10 lg:left-[300px]">
        <p className="text-white text-[48px] leading-[50px]">
          collective
          <br />
          of onchain <br />
          traders, founders, <br />
          and <span className="text-[#EAE7B1]">market makers.</span>
        </p>
        <img
          className="absolute top-6 right-[100px]"
          src="/images/Star-6.png"
          alt=""
        />
      </div>

      <p className="text-[21px] text-white absolute left-[33px] top-[480px] lg:top-[520px]">
        moia capital
        <br />
        copyright©2024
      </p>

      <div className=" text-white absolute top-[370px] lg:top-[415px] right-6 w-[325px]">
        <div className="flex items-center gap-4">
          <h3 className="text-4xl lg:text-[62px] font-medium">+$150K</h3>
          <p className="text-[13px] leading-[14px]">(TOP TRADER 30d PNL)</p>
        </div>
        <p className="text-center text-[13px] leading-[14px]">
          MOIA IS A DIVERSE WEB3 COLLECTIVE/ALPHA <br />
          GROUP THAT CREATES ANDCAPITALIZES ON <br />
          OPPORTUNITIES ACROSS BLOCKCHAINS.
        </p>
        <div className="flex justify-between text-[13px] leading-[14px] mt-3 px-5">
          <p>WE ARE PIONEERS.</p>
          <p>WE ENRICH MARKETS.</p>
        </div>
        <p className="text-center text-[13px] leading-[14px]">
          WE CREATE LIQUIDITY.
        </p>
      </div>

      <div className="bg-[#EAE7B1] p-6 absolute bottom-0 h-[164px] w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src="/images/LOGO-2.png" alt="" />
          <img
            className="w-[300px] lg:w-full"
            src="/images/bottom-text.png"
            alt=""
          />
        </div>
        <Link href={""}>
          <button className="flex items-center gap-2 bg-white px-5 lg:px-[70px] py-5 rounded-[36px]">
            apply in discord <img src="/images/link-icon.png" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}
