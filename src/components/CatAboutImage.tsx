import Image from "next/image";
import img from "/Users/tr3ble/dev/tr3blesite/public/images/catabout.png";

export const CatAboutImage = () => {
  return <div>
    <Image 
    src={img} 
    alt="About" 
    width={400} 
    height={400} 
    className="rounded-full"
    />
  </div>;
};