
const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        {/* <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button> */}
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A commodi
          rerum nisi suscipit reiciendis ducimus quo consectetur deleniti animi
          dolor ipsa laboriosam illum tenetur beatae placeat, tempora vitae
          alias adipisci.
        </p>
        {/* <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia modi
          minima vel itaque reiciendis officiis tempora molestias aut! Illum,
          voluptas!
        </p> */}
      </div>
    </div>
  );
};

export default ProductDescription;
