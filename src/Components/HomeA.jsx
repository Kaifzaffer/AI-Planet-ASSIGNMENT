import rocket from "../assets/rocket.png";
import { useNavigate } from "react-router-dom";

export default function HomeA() {
  const navigate = useNavigate();

  const handleCreateChallengeClick = () => {
    navigate("/create-challenge");
  };

  return (
    <div className="w-full max-w-[1442px] min-h-[561px] bg-[#003145] relative overflow-hidden p-4 flex flex-col lg:flex-row items-center">
      <div className="flex-1 text-center lg:text-left" style={{ paddingTop: "100px" }}>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl">
          Accelerate Innovation <br /> with Global AI challenges
        </h1>
        <p className="text-white mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          AI Challenges at DPhi simulate real-world problems. It is a <br />
          great place to put your AI/Data Science skills to test on <br /> 
          diverse datasets allowing you to foster learning through <br /> 
          competitions.
        </p>

        <button
  onClick={handleCreateChallengeClick}
  className="bg-white mt-6 px-6 py-2 lg:py-3 lg:px-8 rounded-lg text-sm lg:text-base font-semibold"
>
  Create Challenge
</button>

      </div>

      <div className="flex justify-center items-center lg:ml-4">
        <div
          className="relative"
          style={{
            width: "242px",
            height: "294px",
            backgroundImage: `url(${rocket})`,
            backgroundSize: "cover",
            transform: "rotate(21.41deg)",
          }}
        ></div>
      </div>
    </div>
  );
}
