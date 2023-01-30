import axios from "axios"
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
    params: {
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': 'e8f9bfed0cmshb65608cd5919fbdp13786ejsn21b00cfc707f',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    
  };
  export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}`,options)
        return response.data
    }
  }