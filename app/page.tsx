import Image from "next/image";

export default async function Home() {
  const data = await fetch("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json")
  if(!data.ok) throw new Error("Failed to fetch data");
  const albums = await data.json();


  return (
    <div>
      
    </div>
  );
}
