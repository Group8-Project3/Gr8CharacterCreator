import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api",
})

export const insertCharacter = payload => api.post(`/character`, payload)
export const getAllCharacters = () => api.get(`/character`)
export const deleteCharacterById = id => api.delete(`/character/${id}`)

const apis = {
    insertCharacter,
    getAllCharacters,
    deleteCharacterById,
}

export default apis;