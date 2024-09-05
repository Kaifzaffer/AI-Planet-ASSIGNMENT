import rocket from "../assets/rocket.png";
import { useNavigate } from "react-router-dom";
export default function HomeA() {
  const navigate = useNavigate();

  const handleCreateChallengeClick = () => {
    navigate("/create-challenge");
  };

  return (
    <div
      className="w-full max-w-[1442px] h-[561px] bg-[#003145] relative overflow-x-hidden"
      style={{ top: "4px", left: "-1px", gap: "0px", opacity: "0px" }}
    >
      <div
        className="absolute w-[705px] h-[348px] font-poppins font-semibold"
        style={{
          top: "188px",
          // left: "px",
          lineHeight: "20px",
          textAlign: "center",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <h1 className="text-white text-4xl">
          Accelerate Innovation <br /> with Global AI challenges
        </h1>
        <p className="text-white mt-4">
          Al Challenges at DPhi simulate real-world problems. It is a <br />
          great place to put your Al/Data Science skills to test on <br />{" "}
          diverse datasets allowing you to foster learning through <br />
          competitions.
        </p>

        <button
          onClick={handleCreateChallengeClick}
          className="bg-white mt-4 rounded-tl-lg rounded-bl-lg"
          style={{
            width: "198px",
            height: "47px",
            top: "489px",
            left: "205px",
            padding: "15px 18px 14px 18px",
            gap: "10px",
            borderRadius: "10px",
            opacity: "0px",
          }}
        >
          Create Challenge
        </button>
      </div>

      <div className="absolute" style={{ width: "294px", height: "294px" }}>
        <div
          className="absolute"
          style={{
            top: "170px",
            left: "900.34px",
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
