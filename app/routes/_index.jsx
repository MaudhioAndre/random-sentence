import { useLoaderData, json } from "@remix-run/react";
import Serve from "../data/serve";

export const meta = () => {
  return [
    { title: "Random Nice Sentence" },
    { name: "description", content: "Random Nice Sentence!" },
  ];
};


export default function Index() {

  const data = Serve();
  console.log(data);
  
  return <div style={{textAlign:"center", fontSize:"20px",marginTop:"20px"}}>{data.text}</div>;
}

