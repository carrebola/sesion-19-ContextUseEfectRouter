import { Avatar } from "./Avatar";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export function Header(){

const {user, setUser} = useContext(GlobalContext)



  return (
    <div className="h-[60px] p-3 flex items-center bg-white border shadow justify-end">
      <Avatar data={user}></Avatar>
    </div>
  )
}