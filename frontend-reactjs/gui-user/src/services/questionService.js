import axios from "axios";
import { URL_PATH } from "../utils/constants";
import { getDataByKeyLS } from "../utils/common";
const token = getDataByKeyLS("auth")?.token
const auth = JSON.parse(localStorage.getItem('auth'))
export const questionService = {
    uploadFileQuestion: (file, answerFile) => {
        const url = URL_PATH + "/api/upload"
        const formData = new FormData();
        formData.append('file', file);
        formData.append('answerFile', answerFile);

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        };
        return axios.post(url, formData, config)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.response?.data.message)
                return error.response
            })
    },

    getQuestionResult: (idExamNumber, authObject) => {
        const url = `${URL_PATH}/api/questions/exam-number/${idExamNumber}`
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${authObject?.token}`
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.response?.data.message);
                return error.response;
            });
    },
    getQuestion: (idQuestion) => {
        const url = `${URL_PATH}/api/questions/${idQuestion}`
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${auth?.token}`
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.response?.data.message);
                return error.response;
            });
    },
    updateQuestion: (data, id) => {
        const url = `${URL_PATH}/api/questions/${id}`
        return axios.put(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.response?.data.message)
                return error.response
            })
    },
}