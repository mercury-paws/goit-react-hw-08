import { useState, useEffect } from "react";

export default function Loader() {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <p>
      <b>Loading page{dots}</b>
    </p>
  );
}
