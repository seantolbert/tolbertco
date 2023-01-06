import Logo from "../assets/small_tolbert&co.png";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 p-5 flex items-center justify-between">
      {window.innerWidth < 640 ? (
        <></>
      ) : (
        <>
          <div className="w-10">
            <img src={Logo} alt="" />
          </div>

          <div className="flex gap-5 text-white">
            <a href="#About">About</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Contact">Contact</a>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
