// @ts-nocheck

// import Foto 
import heart1 from '../assets/heart-1.jpg';
import heart2 from '../assets/heart-2.jpg';
import heart3 from '../assets/heart-3.jpg';
import heart4 from '../assets/heart-4.jpg';
import foto from '../assets/foto1.jpg'
import video from '../assets/video5.mp4'



export const posts = [
  {}
];

export const users = [
  {}
];

export const heartedPosts = [
  { id: 0, img: heart2, author: 'userName', title1: 'title1', title2: 'title2' },
  { id: 1, img: heart1, author: 'userName', title1: 'title1', title2: 'title2' },
  { id: 2, img: heart3, author: 'userName', title1: 'title1', title2: 'title2' },
  { id: 3, img: heart4, author: 'userName', title1: 'title1', title2: 'title2' }
]


export const recommendedPosts = [
  {
    id: 1,
    type: 'foto',
    url: { foto }
  },
  {
    id: 2,
    type: 'video',
    url: { video }
  },
  {
    id: 3,
    type: 'foto',
    url: { foto }
  },
  {
    id: 4,
    type: 'video',
    url: { video }
  },
  {
    id: 5,
    type: 'foto',
    url: { foto }
  },
  {
    id: 6,
    type: 'video',
    url: { video }
  },
  {
    id: 7,
    type: 'foto',
    url: { foto }
  },
  {
    id: 8,
    type: 'video',
    url: { video }
  },
];

export const comments = [
  {
    id: 1,
    creator: { id: 76543345, avatar: heart1, username: 'ibroxkimweb' },
    comment: "Lorem ipsum dol or sit amet consectetur adipisicing elit. Voluptatibus adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: '19-Sentabr, 22:09',
    commentLike: 900
  },
  {
    id: 2,
    creator: { id: 76543745, avatar: heart2, username: 'ibroxkimweb' },
    comment: "Voluptatibus adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: '10-Sentabr, 20:19',
    commentLike: 200
  },
  {
    id: 3,
    creator: { id: 76593745, avatar: heart3, username: 'ibroxkimweb' },
    comment: "Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: '10-Sentabr, 17:50',
    commentLike: 1000
  },
  {
    id: 4,
    creator: { id: 76543305, avatar: heart4, username: 'ibroxkimweb' },
    comment: "Lorem ipsum dol or sit amet consectetur adipisicing elit. Voluptatibus adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: '19-Sentabr, 12:00',
    commentLike: 1200
  },
  {
    id: 5,
    creator: { id: 73543305, avatar: heart1, username: 'ibroxkimweb' },
    comment: "Lorem ipsum dol or sit amet ? ",
    data: '19-Sentabr, 10:25',
    commentLike: 10
  },
  {
    id: 6,
    creator: { id: 83543905, avatar: heart4, username: 'ibroxkimweb' },
    comment: "Lorem ipsum ? ",
    data: '19-Sentabr, 09:15',
    commentLike: 1250
  },
  {
    id: 7,
    creator: { id: 86543345, avatar: heart2, username: 'ibroxkimweb' },
    comment: "Lorem ipsum dol or sit amet consectetur adipisicing elit. Voluptatibus impedit cupiditate eveniet eveniet perferendis ea fugiat laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: '19-Sentabr, 22:09',
    commentLike: 900
  },
  {
    id: 8,
    creator: { id: 86543745, avatar: heart1, username: 'ibroxkimweb' },
    comment: "Voluptatibus adipisicing elit. Voluptatibus consectetur? eum consectetur? ",
    data: '10-Sentabr, 20:19',
    commentLike: 200
  },
  {
    id: 9,
    creator: { id: 86593745, avatar: heart3, username: 'ibroxkimweb' },
    comment: "Voluptatibus laboriosam reprehenderit conse quatur eum consectetur? eum consectetur? ",
    data: '10-Sentabr, 17:50',
    commentLike: 1000
  },

];
