import Page2 from "@/page2"; // Correct import
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Page2 /> {/* Render Page2 as a component */}
    </div>
  );
}