import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "My Windows: Mindows",
    image: projectOne,
    description: (
      <>
        <p>A minimal Windows 10 experience on the browser</p>
      </>
    ),
    github: "https://github.com/Vyashvardhan/MyWindows-Mindows",
    demo: "https://mindows.netlify.app",
  },
  3: {
    title: "Social Media App",
    image: projectTwo,
    description: (
      <>
        <p>
          A cutting-edge social media client designed for seamless and dynamic
          user interactions, leveraging Node.js for robust and efficient backend
          performance.
        </p>
      </>
    ),
    github: "https://github.com/Vyashvardhan/Social-Media",
    demo: "https://github.com/Vyashvardhan/Social-Media",
  },
  2: {
    title: "Health Broker",
    image: projectThree,
    description: (
      <>
        <p>
          Welcome to our comprehensive healthcare platform! Our website offers a
          seamless experience for users and doctors alike.
        </p>
      </>
    ),
    github: "https://github.com/Vyashvardhan/Health-Brooker",
    demo: "https://healthbooker.onrender.com/",
  },
};

export default projects;
