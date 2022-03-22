const API_KEY = 'NGAcmNPwJfuE8nc69hIWVDd8pkqJsh77'
const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`

export const getGifs = (signal) => {
  return fetch(API_URL, { signal })
    .then((res) => res.json())
    .then((res) => {
      const { data = [] } = res
      if (Array.isArray(data)) {
        return data
      }
    })
}

export const getSearch = (keyword, signal) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10`,
    { signal }
  )
    .then((res) => res.json())
    .then((res) => {
      const { data = [] } = res
      if (Array.isArray(data)) {
        return data
      }
    })
}
