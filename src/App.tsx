// views
import { About, Contact, Landing, Projects } from "./views";

// components
import { Menu } from "./components";

function App() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Menu />
    </>
  );
}

export default App;
