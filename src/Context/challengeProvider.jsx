import { createContext, useState } from "react";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]); // Store all challenges
  const [filteredChallenges, setFilteredChallenges] = useState([]); // Store filtered challenges

  // Function to add a new challenge
  const addChallenge = (challenge) => {
    setChallenges([...challenges, challenge]);
  };

  // Function to edit an existing challenge
  const editChallenge = (updatedChallenge) => {
    setChallenges(
      challenges.map((ch) => (ch.id === updatedChallenge.id ? updatedChallenge : ch))
    );
  };

  // Function to delete a challenge
  const deleteChallenge = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        setChallenges,
        addChallenge,
        editChallenge,
        deleteChallenge,
        filteredChallenges, // Provide filtered challenges to components
        setFilteredChallenges // Allow components to set filtered challenges
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
