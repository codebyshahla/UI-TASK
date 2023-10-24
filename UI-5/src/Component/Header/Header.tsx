import img from "../../assets/bg2.jpeg";

function Header() {
  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-between bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
          <ul className="font-bold flex space-x-9 text-white pt-4 px-8">
            <li className="text-2xl">
              <span className="text-white flex-1">LOGo</span>
            </li>
            <span className="flex-1"></span>
            <li>
              <span className="text-yellow-500">Home</span>
            </li>
            <li>Products</li>
            <li>Accounts</li>
            <li>Contact</li>
          </ul>

        <div className="px-4 lg:ps-24">
          <h1 className="text-white font-extrabold text-5xl">
            STIMULATES <br /> BODY AND MIND
          </h1>
          <br />
          <br />
          <p className="text-white font-bold">
            Angry energy drink is appreciated by students and <br />
            Perfomance-oriented professionals.and angry drinks <br />
            Keeps you sharp during long car rides.
          </p>{" "}
          <br />
          <br />
          <button className="bg-yellow-500 text-black rounded-xl shadow-yellow-400 shadow-sm py-3 px-5 text-xs font-semibold">
            Explore More
          </button>
        </div>

        <div className="bg-blue-900 flex justify-center text-white py-4 max-w-7xl mx-auto rounded px-8">
          <h1 className="font-extrabold text-xl items-center">
            TEAR INTO THE ANGRIEST ENERGY DRINK
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
