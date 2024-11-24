
import Featured from "@/components/featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Slider/>
    <Featured/>
    <Offer/>
   </div>
  );
}
