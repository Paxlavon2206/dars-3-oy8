import { Button } from "@/components/reusable-btn/button";
import { Input } from "@/components/reusable-input/input";


export default function Home() {
  return (
    <div className="p-6">
    <Button text="Click me" className=" bg-blue-400 mr-4 py-1 px-4 rounded-xl  hover:scale-110 hover:bg-blue-600"/>
    <Button text="Click 2" className=" bg-red-400 py-1 px-4 rounded-xl  hover:scale-110 hover:bg-red-600 mr-5"/>
    <Input placeholder="Enter your name" text="Name" className="  py-1 px-4 border border-[#949191] rounded-xl bg-[#dadada] mr-5"/>
    <Input placeholder="Enter your password" text="Password" className="  py-1 px-4 border border-[#949191] rounded-xl bg-[#dadada] "/>
    </div>
  );
}
