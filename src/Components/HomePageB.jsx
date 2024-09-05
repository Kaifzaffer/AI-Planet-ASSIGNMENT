import Ai from "../assets/Ai.svg";
import datascience from "../assets/datascience.svg";
import host from "../assets/host.svg";

function HomePageB() {
  return (
    <div
      className="flex items-center justify-center w-full max-w-[1442px] h-[200px] bg-[#003145] relative overflow-x-hidden"
      style={{
        left: "-1px",
        gap: "0px",
        opacity: "0px",
      }}
    >
      <div
        className="flex justify-around w-[1075px] h-[55px] text-white items-center"
        style={{
          top: "701px",
          left: "183px",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <div className="flex items-center">
          <div>
            <img src={Ai} alt="Ai" />
          </div>
          <div className="ml-4">
            <div className="text-xl font-semibold">100K+</div>
            <div className="text-sm">AI Model Submission</div>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img src={datascience} alt="Ai" />
          </div>
          <div className="ml-4">
            <div className="text-xl font-semibold">50K+</div>
            <div className="text-sm">Data Scientist</div>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img src={host} alt="Ai" />
          </div>
          <div className="ml-4">
            <div className="text-xl font-semibold">100+</div>
            <div className="text-sm">AI Challenges hosted</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageB;
