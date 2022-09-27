// @ts-nocheck
import { user } from "./users.js";

// Import video or foto
import video from '../../assets/alquran.uz.mp4'

const { id, username, firstName, lastName, avatar } = user;

export const post = {
  id: "asfdsghqretr",
  title: "Scenery",
  desc: "This scenery is located in Yeosu",
  name: "Zokirkhon", // from local storage
  creator: {
    id,
    username,
    firstName,
    lastName,
    avatar, 
  },
  selectedFile: {
    type: 'video',
    url: video, 
  },
  likes: [],
  comments: [],
  createdAd: new Date(),
};

