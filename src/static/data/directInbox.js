// @ts-nocheck
import { messages } from "./messages.js";
import { user } from "./users.js";

const { id, username, firstName, avatar } = user;

let directInboxUser = [
  { id, username, firstName, avatar, messages },
  { id, username, firstName, avatar, messages },
  { id, username, firstName, avatar, messages },
];

console.log(directInboxUser);

console.log(messages)
