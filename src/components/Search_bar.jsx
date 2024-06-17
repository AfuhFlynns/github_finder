import { Moon, Search, Sun } from "react-feather";
import "./Search_bar.css";
import { useEffect, useState } from "react";

const LOCAL_THEME_KEY = "github:theme";
const Search_bar = ({ isDarkMode, setIsDarkMode, setUser }) => {
  const [input, setInput] = useState("");

  const saveTheme = () => {
    localStorage.clear();
    localStorage.setItem(LOCAL_THEME_KEY, isDarkMode);
  };

  const renderTheme = () => {
    const theme = localStorage.getItem(LOCAL_THEME_KEY);
    setIsDarkMode(theme);
  };

  useEffect(() => {
    renderTheme();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (value) => {
    setInput(value);
  };

  //Toggling the background color of the body
  document.body.style.backgroundColor = `${isDarkMode ? "#141C2F" : "#f0f2f5"}`;
  return (
    <>
      <div className="search-bar">
        <div className={isDarkMode ? "heading-dark" : "heading-light"}>
          <h3>devfinder</h3>
          <div
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              saveTheme();
            }}
          >
            {isDarkMode ? (
              <span>
                <p>Light</p> <Sun className="switch" />
              </span>
            ) : (
              <span>
                <p>Dark</p> <Moon className="switch" />
              </span>
            )}
          </div>
        </div>
        <div
          className={
            isDarkMode ? "search-container-dark" : "search-container-light"
          }
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <Search className="search-icon" />
            <input
              type="text"
              value={input}
              placeholder="Search Github username..."
              onChange={(e) => handleInput(e.target.value)}
            />
          </form>
          <button onClick={() => handleFetch()}>Search</button>
        </div>
      </div>
    </>
  );
};

export default Search_bar;
