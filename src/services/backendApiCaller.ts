import { BASE_URL } from "@/utils/constants";
import axios from "axios"

export const backendApiCaller = async ({endpoint}: {endpoint: string}) => {
    try {
        const url = `${BASE_URL}/${endpoint}`
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
