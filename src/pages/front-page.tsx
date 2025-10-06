function FrontPage() {
  return (
    <div className=" bg-[#f9f6f2] w-full h-full   ">
      {/* Top right floral decoration */}
      <img
        src="https://res.cloudinary.com/dyieqja4r/image/upload/v1759664173/faith/image1_vlmjrm.png"
        alt=""
        className="absolute top-0 -right-[6%] w-[45%] h-auto "
      />

      {/* Bottom left floral decoration */}
      <img
        src="https://res.cloudinary.com/dyieqja4r/image/upload/v1759664173/faith/image1_vlmjrm.png"
        alt=""
        className="absolute bottom-0 -left-[6%] w-[45%] h-auto transform rotate-180"
      />

      {/* Content */}
      <div className="absolute  z-20 p-[10%] top-0 bottom-0 left-0 right-0 ">
        <div className="w-full h-full flex flex-col justify-center items-center bg-white">
          <p
            className="text-[#6B8BA8] text-xs tracking-[0.1em] uppercase mb-8 font-extralight"
            style={{ fontFamily: "monospace" }}
          >
            Our Sincere
          </p>

          <div
            className="text-[#3B4F6B] mb-12 text-center"
            style={{ fontFamily: "cursive" }}
          >
            <p className="text-7xl mb-2 leading-none">Thank</p>
            <p className="text-7xl leading-none">You</p>
          </div>

          <p
            className="text-[#6B8BA8] text-xs tracking-[0.12em] uppercase text-center font-extralight leading-relaxed"
            style={{ fontFamily: "monospace" }}
          >
            For Your Exceptional
            <br />
            Support
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
