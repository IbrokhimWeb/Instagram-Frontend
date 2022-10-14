import { React, useState } from "react";
import { Link } from "react-router-dom";
import { userProfile } from "../../static/static";
import UserFollowers from "./userFollowers/UserFollowers";
import Posting from "./posting/Posting";
import s from "./Me.module.css";
import HighLights from "./highLights/HighLights";
const Me = () => {
  const userInfos = [userProfile[0]];
  const userHighLights = userProfile[0].highLights;
  const userPosts = userProfile[1].posts;
  //MODAL FOR SHOWING PROFILE OPTIONS
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <div className={s.container}>
        {userInfos.map((user, id) => {
          return (
            <div key={id}>
              <div className={s.userProfile}>
                <img
                  className={s.userAvatar}
                  src={user.avatar}
                  alt={user.username}
                />
                <div className={s.userProfileHeader}>
                  <div className={s.userItems}>
                    <div className={s.userOptions}>
                      <div className={s.userOptionItems}>
                        <h5 className={s.userName}>{user.username}</h5>
                        <Link to={"/options"} className={s.optionBtn}>
                          Edit Profile
                        </Link>
                        <svg
                          onClick={showModal}
                          aria-label="Options"
                          className={s.editBtn}
                          color="#262626"
                          fill="#262626"
                          height="25"
                          role="img"
                          viewBox="0 0 24 24"
                          width="25"
                          style={{ marginLeft: "-30px" }}
                        >
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="8.635"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></circle>
                          <path
                            d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                        </svg>
                        {isOpen && (
                          <>
                            <div className={s.modalDiv}>
                              <div className={s.optionBtns}>
                                <p>Change password</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p> QR code</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Change password</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Apps and Websites</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Notifications</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Privacy and Security</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Supervisions</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Login Activity</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Emails from instagram</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Report a problems</p>
                              </div>
                              <div className={s.optionBtns}>
                                <p>Log Out</p>
                              </div>
                              <div
                                onClick={closeModal}
                                className={s.optionBtns}
                              >
                                <p>Cancel</p>
                              </div>
                            </div>
                            <div
                              onClick={closeModal}
                              className={s.overlay}
                            ></div>
                          </>
                        )}
                      </div>
                      {/* COMPONENT THAT SHOWS USER`S FOLLOWERS FOLLOWING AND POSTS */}
                      <UserFollowers userFollowers={userProfile} />
                      <span className={s.profileName}>
                        {user.firstName} {user.lastName}
                      </span>
                      <p className={s.userBio}>{user.bio}</p>
                      <h4 className={s.userLink}>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://mustafo-yakubof.netlify.com"
                        >
                          {user.userLink}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* SECTION HIGHLIGHTS (STORIES ) */}
              <HighLights userHighLights={userHighLights} />

              {/* SECTION POSTING AND ITEMS  */}

              <Posting userPosts={userPosts} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Me;
