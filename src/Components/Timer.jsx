import  { useState, useEffect } from 'react';

const Timer = ({ startDate }) => {
  const calculateTimeRemaining = (start) => {
    const now = new Date();
    const startTime = new Date(start);
    const timeDifference = startTime - now;

    if (timeDifference <= 0) return { days: 0, hours: 0, minutes: 0 };

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(startDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(startDate));
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); 
  }, [startDate]);

  return (
    <div className="mt-4 text-center text-gray-600">
      <p className="text-sm">Starts in:</p>
      <p className="text-lg font-semibold">
        {timeRemaining.days} Days {timeRemaining.hours} Hours {timeRemaining.minutes} Minutes
      </p>
    </div>
  );
};

export default Timer;
