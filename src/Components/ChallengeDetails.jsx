import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChallengeContext } from "../Context/challengeProvider";
import Timer from "../Components/Timer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import skill from "../assets/skill.svg";

function ChallengeDetails() {
  const { challenges, setChallenges } = useContext(ChallengeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const challenge = location.state;
  const [showOverview, setShowOverview] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!challenge) {
    return <div>No challenge data available</div>;
  }

  const handleOverviewClick = () => {
    setShowOverview(!showOverview);
  };

  const handleDeleteClick = () => {
    const updatedChallenges = challenges.filter((ch) => ch.id !== challenge.id);
    setChallenges(updatedChallenges);
    navigate("/"); // Redirect to homepage after deletion
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (updatedChallenge) => {
    const updatedChallenges = challenges.map((ch) =>
      ch.id === challenge.id ? updatedChallenge : ch
    );
    setChallenges(updatedChallenges);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col relative">
      <div className="w-[100%] h-[419px] bg-[#003145] flex flex-col justify-between">
        <div className="w-[818px] h-[228px] mt-24 ml-24 flex flex-col justify-between">
        <p className="w-[464px] h-[34px] rounded text-justify bg-[#FFCE5C] flex items-center">
  <AccessTimeIcon className="ml-2" />
  <span className="ml-2">
    Starts on <Timer startDate={challenge.startDate} />
  </span>
</p>

          <h1 className="text-4xl text-white mt-2">{challenge.challengeName}</h1>
          <div className="">
            <img src={skill} alt="image" />
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[66px] bg-slate-400 flex justify-between">
        <div className="ml-28 pb-2 border-b-4 border-green-500 flex justify-between items-end">
          <button
            className="font-inter font-semibold text-[18px]"
            onClick={handleOverviewClick}
          >
            Overview
          </button>
        </div>
        <div className="mr-28 flex justify-center items-center">
          <button
            className="font-poppins font-semibold text-[14px] mr-4 text-white bg-[#44924C] w-[91px] h-[37px] rounded"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className="font-poppins font-semibold text-[14px] mr-4 text-[#DC1414] w-[91px] h-[37px] rounded border border-[#DC1414] bg-transparent"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>

      {showOverview && (
        <div className="w-[100%] p-6 mt-4 bg-white shadow-md">
          {/* <h2 className="text-2xl font-bold mb-4">Hackathon Description</h2> */}
          <p className="text-lg text-gray-700">{challenge.description}</p>
        </div>
      )}

      {isEditing && (
        <div className="w-[100%] p-6 mt-4 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">Edit Hackathon</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const updatedChallenge = {
                ...challenge,
                challengeName: e.target.challengeName.value,
                description: e.target.description.value,
                startDate: e.target.startDate.value,
              };
              handleSaveEdit(updatedChallenge); // Save the edited details
            }}
          >
            <div>
              <label>Challenge Name</label>
              <input
                type="text"
                name="challengeName"
                defaultValue={challenge.challengeName}
                className="block border mt-2 p-2 rounded"
              />
            </div>
            <div className="mt-4">
              <label>Description</label>
              <textarea
                name="description"
                defaultValue={challenge.description}
                className="block border mt-2 p-2 rounded w-full"
              ></textarea>
            </div>
            <div className="mt-4">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                defaultValue={challenge.startDate}
                className="block border mt-2 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChallengeDetails;
