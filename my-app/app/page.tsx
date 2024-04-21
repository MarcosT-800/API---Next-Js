import Image from "next/image";
import { Tags }  from "./Get";
import { AddTagUpdate } from "./NewPost";

export default function Home() {
  return (
  <>
    <Tags />
    <AddTagUpdate />
  </>
  );
}
