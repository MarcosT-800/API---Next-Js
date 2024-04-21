import Image from "next/image";
import { Tags }  from "./Get";
import AddTags from "./Post";

export default function Home() {
  return (
  <>
    <Tags />
    <AddTags />
  </>
  );
}
