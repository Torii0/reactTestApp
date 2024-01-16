import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface LikeProps{
    onClick: ()=> void;
}

const Like = ({onClick}: LikeProps) => {
 // const [likeClicked, setLikeCliced] = useState(false);
 const [status, setStatus] = useState(true);

 const toggle = ()=>{
    setStatus(!status);
    onClick();
 }
    if(status) return <FaRegHeart size="20" onClick={toggle}/>
    return  <FaHeart size="20" color="red" onClick={toggle} />
      {/* {likeClicked == false ? (
        <FaRegHeart size="20" onClick={() => setLikeCliced(true)} />
      ) : (
        <FaHeart size="20" color="red" onClick={() => setLikeCliced(false)} />
      )} */}
};

export default Like;
