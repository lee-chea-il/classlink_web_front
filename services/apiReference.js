import axios from 'axios'
// import http from './http'

const getYoutubeData = async (youtubeUrl) => {
  return await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?id=${youtubeUrl}&key=AIzaSyB5-JcQb2Ltp3ENM5U2AYE80m_LLK9KjAY&part=snippet,contentDetails&fields=items(id,snippet(title),contentDetails(duration))`
  )
}

const apiReference = {
  getYoutubeData,
}

export default apiReference
// ,,,
// &fields=items(id,snippet(title),contentDetails(duration))
// duration
