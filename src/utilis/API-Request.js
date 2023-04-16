import axios from "axios"

export const getNews = async() => {
    console.log(process.env.REACT_APP_API_KEY)
    const {data} = await axios.get(`https://newsapi.org/v2/everything?q=coding&apiKey=${process.env.REACT_APP_API_KEY}`)
    // console.log(data.articles.slice(0,20))
    return data.articles.slice(0,20);
}

// module.exports = {
//     getNews
// }