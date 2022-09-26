export const messages = [
  {
    id: 1,
    type: "text",
    content: {
      username: "zokirkhon1002",
      firstName: "Zokirkhon",
      img: "avatar.jpg",
      message: "hammaga salom",
      sendDate: new Date(),
    },
  },
  {
    id: 5,
    type: "video",
    content: {
      username: "shamsiddinCoder",
      firstName: "Zokirkhon",
      img: "avatar.jpg",
      message: {
        id: 1234,
        title: "mening mashinam",
        content: { url: "qandaydirLink.mp4" },
        sendDate: new Date(),
      },
    },
  },
  {
    id: 6,
    type: "photo",
    content: {
      username: "shamsiddinCoder",
      firstName: "Zokirkhon",
      img: "avatar.jpg",
      message: {
        id: 1234,
        title: "mening mashinam",
        content: { url: "qandaydirLink.jpg" },
        sendDate: new Date(),
      },
    },
  },
  {
    id: 4,
    type: "file",
    content: {
      username: "shamsiddinCoder",
      firstName: "Zokirkhon",
      img: "avatar.jpg",
      fileMessage: {
        id: 1234,
        title: "mening mashinam",
        type: "pdf",
        content: { url: "qandaydirLink.pdf" },
        sendDate: new Date(),
      },
    },
  },

  {
    id: 2,
    type: "post",
    content: {
      username: "ibrokhimweb",
      firstName: "Zokirkhon",
      img: "avatar.jpg",
      postMessage: {
        id: 123,
        title: "mening mushugim",
        type: "photo",
        content: { img: "qandaydirLink.png" },
        sendDate: new Date(),
      },
    },
  },
  {
    id: 3,
    type: "post",
    content: {
      username: "shamsiddinCoder",
      firstName: "Zokirkhon",
      img: "avatar.jpg",
      postMessage: {
        id: 1234,
        title: "mening mashinam",
        type: "video",
        content: { video: "qandaydirLink.mp4" },
        sendDate: new Date(),
      },
    },
  },
];
