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

export const getSearch = ({
  keyword,
  signal,
  limit = 10,
  raiting = 'g',
  page = 0
} = {}) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
      page * limit
    }&raiting=${raiting}`,
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

export const getSearchTerms = () => {
  return fetch(`https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      const { data = [] } = res
      if (Array.isArray(data)) {
        return data
      }
    })
}

export const getGifById = (gifID) => {
  return fetch(`https://api.giphy.com/v1/gifs/${gifID}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      const { data = {} } = res
      return data
    })
}

export const getTagsGifs = (term, signal) => {
  return fetch(
    `https://api.giphy.com/v1/tags/related/${term}?api_key=${API_KEY}&limit=5`,
    { signal }
  )
    .then((res) => res.json())
    .then((res) => {
      const { data = {} } = res
      return data
    })
}

export const getRelatedGifs = (gifID, signal) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/related?gif_id=${gifID}&api_key=${API_KEY}&limit=10`,
    { signal }
  )
    .then((res) => res.json())
    .then((res) => {
      const { data = [] } = res
      return data
    })
}
