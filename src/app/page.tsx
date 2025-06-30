import UserCard from "@/components/user/UserCard";
import Image from "next/image";
export default function Home() {
  return (
    <div 
    className="grid grid-cols-2 p-4">
      <div className="flex justify-center align-center">
     <h1 className="text-[150px]">Srun Oudomsambath * Roith</h1>
      <h2 className="text-3xl font-ubuntu">Lorem ipsum dolor sit amet. </h2>
      <Image 
     src ="/images/hahah.jpg"
     alt = "this is image"
     width={500}
     height={100}
     className="bg-amber-800 border-8 border-amber-800 rounded-2xl"
     />
     </div>
     <div className="bg-black border-amber-600 rounded-2xl">
      <UserCard/>
     </div>
     
   
    </div>
  );
}
