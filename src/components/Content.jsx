import "./Content.css";
import "./No_Content.css";
import logo from "../assets/logo.png";
import { Briefcase, Globe, MapPin, Twitter } from "react-feather";

const Content = ({ user, isDarkMode }) => {
  let date = new Date(user.created_at);
  date = date.toString().split(" ");
  return (
    <>
      <div
        className={
          isDarkMode ? "display-container-dark" : "display-container-light"
        }
      >
        {user.length != 0 ? (
          <div className="main-container">
            <img
              src={user.avatar_url}
              alt="User Profile"
              className="profile-photo"
            />
            <div>
              <div className="top-div">
                <section className="section1">
                  <div>
                    <h3>{user.login}</h3>
                    <span>{user.name}</span>
                  </div>
                  <div>
                    <p>Joined {`${date[2]} ${date[1]} ${date[3]}`}</p>
                  </div>
                </section>
                <section className="section2">
                  {user.bio ? (
                    <p>{user.bio}</p>
                  ) : (
                    <p>This profile has no bio</p>
                  )}
                </section>
              </div>
              <div className="middle-div">
                <p>
                  <span>Repos</span>
                  <h4>{user.public_repos}</h4>
                </p>
                <p>
                  <span>Followers</span>
                  <h4>{user.followers}</h4>
                </p>
                <p>
                  <span>Following</span>
                  <h4>{user.following}</h4>
                </p>
              </div>
              <div className="bottom-div">
                <div>
                  <section>
                    <MapPin className="icon" />
                    {user.location ? (
                      <p>{user.location}</p>
                    ) : (
                      <p>Not Available</p>
                    )}
                  </section>
                  <section>
                    <Globe className="icon" />
                    {user.html_url ? (
                      <p>
                        <a href={user.html_url} n target="_blank">
                          {user.html_url}
                        </a>
                      </p>
                    ) : (
                      <p>Not Available</p>
                    )}
                  </section>
                </div>
                <div>
                  <section>
                    <Twitter className="icon" />
                    {user.twitter_username ? (
                      <p>{user.twitter_username}</p>
                    ) : (
                      <p>Not Available</p>
                    )}
                  </section>
                  <section>
                    <Briefcase className="icon" />
                    {user.company ? (
                      <p>{user.company}</p>
                    ) : (
                      <p>Not Available</p>
                    )}
                  </section>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="error-div">
            <img src={logo} alt="userProfile" />
            <h3>
              Welcome to Github finder. Please ensure to check the spelling of
              user name
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
