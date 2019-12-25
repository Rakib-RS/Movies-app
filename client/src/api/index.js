import axios from 'axios'
//const port = process.env.PORT || 3300;
const api = axios.create({
    baseURL: '/api',
})

export const insertMovie = (payload) => api.post(`/movie`, payload)
export const getAllMovies = () => api.get('/movies')
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
