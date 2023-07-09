import "./styles.css";
import { useSpring, animated } from "react-spring";

export default function App() {
  const springVal = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0)" },
    config: { duration: 1500 }
  });

  return (
    <animated.div style={springVal}>
      <h1 className="spring-component">Hello, World!</h1>
    </animated.div>
  );
}
