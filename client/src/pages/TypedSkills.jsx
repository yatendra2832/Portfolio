import { useEffect, useRef } from "react";
import Typed from "typed.js";
const TypedSkills = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web Development",
        "Backend Development",
        "Frontend Development",
        "DevOps",
        "Software Development",
      ], // Add your learning topics here
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
    };

    const typedInstance = new Typed(typedRef.current, options);

    return () => {
      // Clean up the Typed instance when the component unmounts
      typedInstance.destroy();
    };
  }, []);

  return (
    <h2 className="mb-0 my-2 ">
      I'm into <span className="text-primary" ref={typedRef}></span>
    </h2>
  );
};

export default TypedSkills;
