import { Axios } from "axios";

const clientAxios = Axios.create({
    baseUrl : `${import.meta.env.VITE_BACKEND_URL}/api`
})

export default clientAxios;