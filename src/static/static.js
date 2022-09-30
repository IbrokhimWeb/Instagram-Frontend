// @ts-nocheck

// import Foto
import heart1 from "../assets/heart-1.jpg";
import heart2 from "../assets/heart-2.jpg";
import heart3 from "../assets/heart-3.jpg";
import heart4 from "../assets/heart-4.jpg";
import foto from "../assets/foto1.jpg";
import video from "../assets/video5.mp4";
import userAvatar from "../assets/userAvatar.png";
import userPost from "../assets/carPhoto.jpg";
import following from "../assets/following.jpg";
import userPost2 from "../assets/carPhoto2.jpg";
// import userPost2 from "../assets/carPhoto2.jpg";




// export const posts = [
//   {}
// ];




export const posts = [{}];

export const userProfile = [
  {
    id: "1234asfdgf",
    avatar: userAvatar,
    username: "m_yakuboff",
    password: "12345678",
    firstName: "Mustafo",
    lastName: "Yakubov",
    bio: "Your dreams are waiting for you ...",
    desc: "Student in Chonnam National University",
    userLink: "https://mustafo-yakuboff.netlify.app/",
    highLights: [
      {
        img: userPost2,
        desc: "Amg ",
      },
      {
        img: userPost,
        desc: "Cls ",
      },
    ],
    postLikes: [],
    savedPosts: [],
  },
  {

    followers: [
      {
        username: "qwrty555",
        avatar: following,
        bio: "never give up",
      },  
      {
        username: "m_yakuboff",
        avatar: following,
        bio: "keep doing it and don`t give up",
      },
      {
        username: "klyuldasheva",
        avatar: following,
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
      {
        img: userPost,
        title: "dream car",
        date: new Date(),
        id: Math.random(),
      },
      {
        img: userPost2,
        title: "dream car",
        date: new Date(),
        id: Math.random(),
      },
      {
        img: userPost,
        title: "dream car",
        date: new Date(),
        id: Math.random(),
      },
      {
        img: userPost2,
        title: "dream car",
        date: new Date(),
        id: Math.random(),
      },
      {
        img: userPost,
        title: "dream car",
        date: new Date(),
        id: Math.random(),
      },
    ],
  },
];
// console.log(userProfile[1].followers.avatar);

export const heartedPosts = [
  {
    id: 0,
    img: heart2,
    author: "userName",
    title1: "title1",
    title2: "title2",
  },
  {
    id: 1,
    img: heart1,
    author: "userName",
    title1: "title1",
    title2: "title2",
  },
  {
    id: 2,
    img: heart3,
    author: "userName",
    title1: "title1",
    title2: "title2",
  },
  {
    id: 3,
    img: heart4,
    author: "userName",
    title1: "title1",
    title2: "title2",
  },
];

export const recommendedPosts = [
  {
    id: 1,
    type: "foto",
    url: { foto },
  },
  {
    id: 2,
    type: "video",
    url: { video },
  },
  {
    id: 3,
    type: "foto",
    url: { foto },
  },
  {
    id: 4,
    type: "video",
    url: { video },
  },
  {
    id: 5,
    type: "foto",
    url: { foto },
  },
  {
    id: 6,
    type: "video",
    url: { video },
  },
  {
    id: 7,
    type: "foto",
    url: { foto },
  },
  {
    id: 8,
    type: "video",
    url: { video },
    type: "video",
    url: "link",
  },
  {
    id: 2,
    type: "image",
    url: "link",
  },
];

export const comments = [
  {
    id: 1,
    creator: { id: 76543345, avatar: heart1, username: "ibroxkimweb" },
    comment:
      "Lorem ipsum dol or sit amet consectetur adipisicing elit. Voluptatibus adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: "19-Sentabr, 22:09",
    commentLike: 900,
  },
  {
    id: 2,
    creator: { id: 76543745, avatar: heart2, username: "ibroxkimweb" },
    comment:
      "Voluptatibus adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: "10-Sentabr, 20:19",
    commentLike: 200,
  },
  {
    id: 3,
    creator: { id: 76593745, avatar: heart3, username: "ibroxkimweb" },
    comment:
      "Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: "10-Sentabr, 17:50",
    commentLike: 1000,
  },
  {
    id: 4,
    creator: { id: 76543305, avatar: heart4, username: "ibroxkimweb" },
    comment:
      "Lorem ipsum dol or sit amet consectetur adipisicing elit. Voluptatibus adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: "19-Sentabr, 12:00",
    commentLike: 1200,
  },
  {
    id: 5,
    creator: { id: 73543305, avatar: heart1, username: "ibroxkimweb" },
    comment: "Lorem ipsum dol or sit amet ? ",
    data: "19-Sentabr, 10:25",
    commentLike: 10,
  },
  {
    id: 6,
    creator: { id: 83543905, avatar: heart4, username: "ibroxkimweb" },
    comment: "Lorem ipsum ? ",
    data: "19-Sentabr, 09:15",
    commentLike: 1250,
  },
  {
    id: 7,
    creator: { id: 86543345, avatar: heart2, username: "ibroxkimweb" },
    comment:
      "Lorem ipsum dol or sit amet consectetur adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: "19-Sentabr, 22:09",
    commentLike: 900,
  },
  {
    id: 8,
    creator: { id: 86543745, avatar: heart1, username: "ibroxkimweb" },
    comment:
      "Voluptatibus adipisicing elit. Voluptatibus consectetur? eum consectetur? ",
    data: "10-Sentabr, 20:19",
    commentLike: 200,
  },
  {
    id: 9,
    creator: { id: 86593745, avatar: heart3, username: "ibroxkimweb" },
    comment:
      "Voluptatibus laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: "10-Sentabr, 17:50",
    commentLike: 1000,
  },
];
