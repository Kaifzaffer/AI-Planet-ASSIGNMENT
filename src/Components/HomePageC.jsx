import notebook from "../assets/notebook.svg";
import Vector from "../assets/Vector.svg";
import Robot from "../assets/Robot.svg";
import identificationCard from "../assets/identificationCard.svg";
function HomePageC() {
  return (
    <div
      className="w-full max-w-[1442px] h-[700px] bg-white"
      style={{
        gap: "0px",
        opacity: "0px",
      }}
    >
      <div
        className="text-center mt-16"
        style={{
          top: "158px",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <h1 className="font-poppins text-[32px] font-semibold leading-[20px] text-center">
          Why Participate in{" "}
          <span style={{ color: "rgba(68, 146, 76, 1)" }}>AI Challenges?</span>
        </h1>
      </div>
      <div
        className="m-12  grid grid-cols-2 grid-rows-2 gap-4 p-8  bg-slate-100"
        style={{
          height: "503px",
          opacity: "0px",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <div className="bg-slate-50">
          <div className="mx-9 my-12 h-24">
            <div>
              <img src={notebook} alt="notebook" className="w-6" />
            </div>
            <div>
              <h1 className="font-poppins text-xl font-semibold">
                Prove your kills
              </h1>
              <p className="font-poppins text-xs font-normal">
                Gain substantial experience by solving real-world problems and
                pit against others to come up with innovative solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50">
          <div className="mx-9 my-12 h-24">
            <div>
              <img src={Vector} alt="notebook" className="w-6" />
            </div>
            <div>
              <h1 className="font-poppins text-xl font-semibold">
                Learn from community
              </h1>
              <p className="font-poppins text-xs font-normal">
                One can look and analyze the solutions submitted by the other
                Data Scientists in the community and learn from them.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50">
          <div className="mx-9 my-12 h-24">
            <div>
              <img src={Robot} alt="notebook" className="w-6" />
            </div>
            <div>
              <h1 className="font-poppins text-xl font-semibold">
                Challenge yourself
              </h1>
              <p className="font-poppins text-xs font-normal">
                There is nothing for you to lose by participating in a
                challenge. You can fail safe, learn out of the entire experience
                and bounce back harder.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50">
          <div className="mx-9 my-12 h-24">
            <div>
              <img src={identificationCard} alt="notebook" className="w-6" />
            </div>
            <div>
              <h1 className="font-poppins text-xl font-semibold">
                Earn recognition
              </h1>
              <p className="font-poppins text-xs font-normal">
                You will stand out from the crowd if you do well in AI
                challenges, it not only helps you shine in the community but
                also earns rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageC;
