import { useEffect, useState } from "react";

type useCountdownProps = {
  timeout: number; //second
  inAdvanceTime?: number; //second
  onEnd?: () => void;
};

const useCountdown = ({
  timeout,
  inAdvanceTime = 0,
  onEnd,
}: useCountdownProps) => {
  const [seconds, setSeconds] = useState(timeout);
  useEffect(() => {
    if (seconds - inAdvanceTime > 0) {
      const timer = setTimeout(() => {
        setSeconds((t) => t - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      onEnd?.();
    }
  }, [seconds, onEnd, inAdvanceTime]);

  return {
    seconds,
    setSeconds,
  };
};

export default useCountdown;
