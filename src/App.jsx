import "./App.css";
import Search_bar from "./components/Search_bar";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <>
      <div className="container">
        <Search_bar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setUser={setUser}
        />
        <Content user={user} isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

export default App;
