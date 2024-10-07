import { useLoaderData, json } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Random Nice Sentence" },
    { name: "description", content: "Random Nice Sentence!" },
  ];
};

export async function loader() {
  const url = await fetch(`${process.env.PATH_API}getrandomsentence`);
  return json(await url.json());
}

export default function Index() {
  const data = useLoaderData();
  console.log(data.Text);
  return <div style={{textAlign:"center", fontSize:"20px",marginTop:"20px"}}>{data.Text}</div>;
}


