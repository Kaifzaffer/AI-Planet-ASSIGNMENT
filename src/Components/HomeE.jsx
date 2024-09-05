import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChallengeContext } from "../Context/challengeProvider";
import Timer from "../Components/Timer";

function HomeE() {
  const { challenges } = useContext(ChallengeContext);
  const navigate = useNavigate();

  const handleParticipateClick = (challenge) => {
    navigate(`/challenge/${challenge.id}`, { state: challenge });
  };

  return (
    <div className="w-full max-w-[1442px] h-[1196px] bg-[#003145] p-8">
      <div className="grid grid-cols-3 gap-8">
        {challenges.map((challenge) => (
          <div
            key={challenge.id} 
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            {challenge.image && (
              <img
                src={challenge.image}
                alt={challenge.challengeName}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="mt-4 text-xl font-bold text-center">
              {challenge.challengeName}
            </h2>
            <div className="mt-2 text-sm text-center text-gray-600">
              <h1 className="text-lg font-semibold">Start in</h1>
              <Timer startDate={challenge.startDate} />
            </div>
            <button
              onClick={() => handleParticipateClick(challenge)}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md"
            >
              Participate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeE;
