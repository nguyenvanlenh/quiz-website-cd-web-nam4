import axios from "axios";
import { URL_PATH } from "../utils/constants"
export const examNumberService = {
    getExamNumberUser: (id) => {
        const url = `${URL_PATH}/api/exam-numbers/users/${id}`
        return axios.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.response?.data.message)
                return error.response
            })
    },
    getExamNumberStudent: (id) => {
        const url = `${URL_PATH}/api/exam-numbers/students/${id}`
        return axios.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.response?.data.message)
                return error.response
            })
    },
    getResultExamNumberUser: (idExamNumber, idUser) => {
        const url = `${URL_PATH}/api/exam-numbers/users/submit/${idExamNumber}?idUser=${idUser}`
        return axios.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.response?.data.message)
                return error.response
            })
    }

}