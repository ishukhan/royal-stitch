import { NavLink } from "react-router-dom";

const Offer = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="bg-banneroffer bg-cover bg-center w-full px-4 py-24 mt-16">
      <div className="max_padd_container flex flex-col lg:items-start">
        <div className="w-full max-w-[600px] text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Trusted by Designers, Loved by Clients
          </h2>
          <h3 className="text-base sm:text-lg lg:text-xl mb-6">
            Our embroidery has earned the trust of those who value perfection.
          </h3>
          <NavLink to={"/mens"} onClick={handleClick}>
          <button className="btn_dark_rounded">Go to store</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Offer;
