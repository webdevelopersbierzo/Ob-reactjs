import APIRequest from "../utils/config/axios.config";

export async function getRandomJoke() {

    return await APIRequest.get('/random')
}