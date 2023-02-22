import axios from "axios"



const Base_Url = 'https://youtube-v31.p.rapidapi.com'

const options = {
    
   params:{
    maxResults:'500'
   },
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchApi = async(url)=>{
   try{
      const {data} =await axios(`${Base_Url}/${url}`,options)
      return data
      console.log(data)
   
    }catch(error){
      console.log(error.message)
    }

  }

