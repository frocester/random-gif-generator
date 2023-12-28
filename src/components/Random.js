import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Random = () => {

const{gif,loading,fetchData} = useGif();

  function onClickHandler() {

    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center mt-[15px] gap-y-5"> 
      <h1 className="text-2xl underline uppercase font-bold">Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt="Gif"/>)
      }
      
      <button className=" w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]" onClick={onClickHandler}> Generate</button>
    </div>
  )
}

export default Random
