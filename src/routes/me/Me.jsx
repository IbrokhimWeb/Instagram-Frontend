/* eslint-disable react/jsx-no-comment-textnodes */
// @ts-nocheck
import { React } from "react";
import s from "./Me.module.css";
import { userProfile } from "../../static/static";
import UserFollowers from "./userFollowers/UserFollowers";
const Me = () => {
  const userInfos = [userProfile[0]];
  const userHighLights = userProfile[0].highLights;
  console.log(userHighLights);
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
                        <button type="button" className={s.optionBtn}>
                          Edit Profile
                        </button>
                        <svg
                          aria-label="Options"
                          className="_ab6-"
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
                      </div>
                      {/* COMPONENT THAT SHOWS USER`S FOLLOWER FOLLOWING AND POSTS */}
                      <UserFollowers userProfile={userProfile} />
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
              {/* MAP FOR SHOW HIGHLIGHTS */}
              {userHighLights.map((item, id) => {
                // eslint-disable-next-line no-lone-blocks
                return (
                  <span className={s.highLIghtsStories} key={id}>
                    <img
                      className={s.highLightImg}
                      src={item.img}
                      alt={item.desc}
                    />
                    <p className={s.highLightDesc}> {item.desc} </p>
                  </span>
                );
              })}

              {/* Adding new highlight button */}
              <div className={s.btnItem}>
                <p className={s.addStoryBtn}>
                  <span>
                    <svg
                      aria-label="Plus icon"
                      class="_ab6-"
                      color="#c7c7c7"
                      fill="#c7c7c7"
                      height="44"
                      role="img"
                      viewBox="0 0 24 24"
                      width="44"
                    >
                      <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path>
                    </svg>
                  </span>
                </p>
                <p className={s.newTxt}> New</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Me;
