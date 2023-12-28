import axios from 'axios';
import { useEffect, useState } from 'react'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => {

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  async function fetchData() {
    setLoading(true);
    const url = tag ? tagUrl: randomUrl;
    const { data } = await axios.get(url);
    console.log(data);
    const imgSource = data.data.images.downsized_large.url;
    setGif(imgSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return{gif,loading,fetchData};
 
}

export default useGif