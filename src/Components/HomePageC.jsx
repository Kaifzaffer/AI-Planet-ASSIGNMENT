import notebook from "../assets/notebook.svg"
import Vector from "../assets/Vector.svg"
import Robot from "../assets/Robot.svg"
import identificationCard from "../assets/IdentificationCard.svg"

export default function HomePageC() {
  const challenges = [
    {
      icon: notebook,
      title: "Prove your skills",
      description: "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
    },
    {
      icon: Vector,
      title: "Learn from community",
      description: "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
    },
    {
      icon: Robot,
      title: "Challenge yourself",
      description: "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
    },
    {
      icon: identificationCard,
      title: "Earn recognition",
      description: "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
    }
  ]

  return (
    <div className="w-full max-w-[1442px] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          Why Participate in{" "}
          <span className="text-[#44924C]">AI Challenges?</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-slate-50 rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-start sm:items-center">
            <div className="mb-4 sm:mb-0 sm:mr-6">
              <img src={challenge.icon} alt={challenge.title} className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-poppins text-lg sm:text-xl font-semibold mb-2">{challenge.title}</h2>
              <p className="font-poppins text-sm font-normal text-gray-600">{challenge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}