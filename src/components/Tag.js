import React, { useState } from "react";
import SpinnerBlack from "./SpinnerBlack";
import useGif from "../hooks/useGif";

const Tag = () => {

  const [tag, setTag] = useState('car');
  const{gif,loading,fetchData} = useGif(tag);

  function onClickHandler() {
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center mt-[15px] gap-y-5">
      <h1 className="text-2xl underline uppercase font-bold">Text {tag} Gif</h1>

      {loading ? <SpinnerBlack /> : <img src={gif} width="450" alt="Text Gif" />}
      <input
        className="w-10/12 bg-white text-lg py-2 rounded-lg text-center"
        onChange={changeHandler}
        value={tag}
        placeholder="Enter tag"
      />
      <button className="w-10/12 bg-white text-lg py-2 rounded-lg mt-[5px]" onClick={onClickHandler}>
        Generate
      </button>
    </div>
  );
};

export default Tag;