import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedSkills = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Development",
        "MERN Stack Applications",
        "Backend Architecture & Node.js",
        "DevOps & Docker Deployment",
        "RESTful API Development",
      ],
      typeSpeed: 70,
      backSpeed: 35,
      backDelay: 1500,
      loop: true,
    };

    const typedInstance = new Typed(typedRef.current, options);

    return () => {
      typedInstance.destroy();
    };
  }, []);

  return (
    <h2 className="mb-0 my-2 text-white">
      Specializing in <span className="gradient-text font-display fw-bold" ref={typedRef}></span>
    </h2>
  );
};

export default TypedSkills;
