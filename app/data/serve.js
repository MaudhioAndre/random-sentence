import { sentence } from "./data";

export default function Serve() {
  const random = Math.floor(Math.random() * sentence.length);
  console.log(random);

  const result = sentence[random]

  return result;
}
