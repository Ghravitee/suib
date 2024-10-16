import About from "./sections/About";
import Hero from "./sections/Hero";

import Navbar from "./sections/Navbar";
import Tokenomics from "./sections/Tokenomics";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      {/* <Memes /> */}
    </div>
  );
};

export default App;
