import { useState, useContext } from "react";
import { ChallengeContext } from "../Context/challengeProvider";

function CreateChallenges() {
  const [challengeName, setChallengeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("Easy");
  const { addChallenge } = useContext(ChallengeContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ challengeName, startDate, endDate });
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageFile(null);
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  const handleSave = () => {
    const challengeData = {
      challengeName,
      startDate,
      endDate,
      description,
      image,
      selectedLevel,
    };
    addChallenge(challengeData);

    console.log("Saved Challenge Data:", challengeData);
  };

  return (
    <div className="w-full max-w-[1442px] bg-[#ffffff] relative overflow-x-hidden">
      <div className="ml-24">
        <div className="font-inter font-bold text-xl h-[80px]">
          <h1 className=" mt-8">Challenge</h1>
        </div>
        <div className="w-[453px] h-[305px] p-4 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="challengeName"
                className="block text-sm font-medium text-gray-700"
              >
                Challenge Name
              </label>
              <input
                id="challengeName"
                type="text"
                value={challengeName}
                onChange={(e) => setChallengeName(e.target.value)}
                placeholder="Enter challenge name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </form>
        </div>
        <div className="w-[817px] h-[292px] mt-8">
          <label
            htmlFor="description"
            className="block text-black text-lg font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleChange}
            placeholder="Enter your description here..."
            className="w-full h-[200px] p-2 border border-gray-300 rounded-md resize-none"
          />
        </div>
        <div className="w-[297px] h-[258px] bg-white shadow-lg rounded-lg p-2 relative">
          <h1>Image</h1>
          {image ? (
            <>
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute bottom-2 right-2 text-black bg-gray-600 p-1 rounded"
              >
                Change Image
              </button>
            </>
          ) : (
            <label className="w-full h-full flex items-center justify-center text-black">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <span>Select Image</span>
            </label>
          )}
        </div>
        <div className="w-[236px] h-[171px] mt-8 p-4 bg-white border border-gray-300 rounded-lg">
          <div className="mb-4">
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-700"
            >
              Select Level
            </label>
            <select
              id="level"
              value={selectedLevel}
              onChange={handleLevelChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <button
            onClick={handleSave}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateChallenges;
