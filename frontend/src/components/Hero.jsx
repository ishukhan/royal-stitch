import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-center bg-no-repeat bg-cover min-h-screen w-full">
      <div className="max_padd_container py-32 xs:py-52">
        <h1 className="h1  text-slate-50 capitalize max-w-[37rem]">
          Royal Stitch – Where Every Thread Tells a Story
        </h1>
        <p className="text-slate-50 regular-16 mt-6 max-w-[33rem]">
         At Royal Stitch, we specialize in intricate, high-precision embroidery that brings every design to life. From regal patterns to custom logos, our work is a blend of tradition, innovation, and attention to the finest detail.
        </p>
        <div className=" text-slate-50 flexStart !items-center gap-x-4 my-10">
          <div className="text-yellow-500 !regular-24 flexCenter gap-x-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20">
            10k{" "}
            <span className="regular-16 sm:regular-20">Excellent Review</span>
          </div>
        </div>
        <div className="mx-xs:flex-col flex gap-2">
          {/* <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
          </NavLink> */}
            <WhatsAppButton className="btn_dark_rounded"/>
          <NavLink to={"/mens"} className={"btn_dark_rounded flexCenter gap-x-2"}>
            <MdOutlineLocalOffer className="text-2xl" />
            Offer
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
