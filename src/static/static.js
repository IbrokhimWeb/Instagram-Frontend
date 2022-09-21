// @ts-nocheck
// import static image
import userAvatar from "../assets/userAvatar.png";
import userPost from "../assets/carPhoto.jpg";
// import userPost2 from "../assets/carPhoto2.jpg";

export const posts = [{}];

export const userProfile = [
  {
    id: "1234asfdgf",
    avatar: userAvatar,
    username: "m_yakuboff",
    password: "12345678",
    firstName: "Zokirkhon",
    lastName: "Kotibkhonov",
    bio: "Work Hard Dream Big",
    desc: "Student in Chonnam National University",

    postLikes: [],
    savedPosts: [],
  },
  {
    followers: [
      {
        username: "qwrty555",
        avatar: userAvatar,
        bio: "never give up",
      },
      {
        username: "m_yakuboff",
        avatar: userAvatar,
        bio: "keep doing it and don`t give up",
      },
      {
        username: "klyuldasheva",
        avatar: userAvatar,
        bio: "in this morning ...",
      },
    ],
    following: [
      {
        username: "qwrty555",
        avatar: userAvatar,
        bio: "never give up",
      },
      {
        username: "m_yakuboff",
        avatar: userAvatar,
        bio: "keep doing it and don`t give up",
      },
      {
        username: "klyuldasheva",
        avatar: userAvatar,
        bio: "in this morning ...",
      },
    ],
    posts: [
      {
        img: userPost,
        title: "dream car",
        date: new Date(),
        id: Math.random(),
      },
    ],
  },
];

export const heartedPosts = [
  { img: "link", title: "nomi" },
  { img: "link", title: "nomi" },
  { img: "link", title: "nomi" },
  { img: "link", title: "nomi" },
];

export const recommendedPosts = [
  {
    id: 1,
    type: "video",
    url: "link",
  },
  {
    id: 2,
    type: "image",
    url: "link",
  },
];
