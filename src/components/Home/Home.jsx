import Branch from "../Branch/Branch";
import hero from "../Images/hero.png";

function Home() {
  return (
    <>
      <div className="mt-1 px-12  pb-[3vh]">
        <div className="mb-[3vw]">
          <div className="flex  justify-between ">
            <div className="left ">
              <h1 className="text-6xl leading-[6vw]  mt-[6vw] font-semibold">
                Bihar&rsquo;s Best <br />{" "}
                <span className="text-orange-500">Learning Platform</span>{" "}
              </h1>
              <a
                href="#"
                className="items-center inline-flex justify-evenly  px-10 py-4  mt-[4vw] ml-5  text-xl font-semibold text-white bg-orange-600 rounded-[4px] hover:bg-orange-500 "
              >
                Syllabus
              </a>
            </div>
            <div className="right">
              <img
                src={hero}
                className="w-[612px] h-[408px] bg-transparent"
                alt="hero"
              />
            </div>
          </div>
        </div>
        <Branch />
      </div>
    </>
  );
}

export default Home;
