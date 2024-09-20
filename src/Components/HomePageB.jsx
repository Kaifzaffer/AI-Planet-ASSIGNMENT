import Ai from "../assets/Ai.svg"
import datascience from "../assets/datascience.svg"
import host from "../assets/host.svg"

export default function HomePageB() {
  const stats = [
    { icon: Ai, alt: "AI", number: "100K+", text: "AI Model Submissions" },
    { icon: datascience, alt: "Data Science", number: "50K+", text: "Data Scientists" },
    { icon: host, alt: "AI Challenges", number: "100+", text: "AI Challenges Hosted" },
  ]

  return (
    <div className="flex items-center justify-center w-full max-w-[1442px] bg-[#003145] py-8 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      <div className="w-full max-w-[1075px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center sm:justify-start">
              <div className="flex-shrink-0">
                <img src={stat.icon} alt={stat.alt} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
              </div>
              <div className="ml-4">
                <div className="text-lg sm:text-xl md:text-2xl font-semibold">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base">{stat.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}