import axios from 'axios';

//axios.defaults.baseURL = process.env.BASE_URL.replace("/static/", "/");
axios.defaults.baseURL = "http://localhost:5000";
//axios.defaults.baseURL = "http://192.168.10.102:5000";


export default class ApiService{

    getBasicMathOperationDigits(operation, firstDigit, secondDigit, count, hasAnswer){
        return axios.post('/api/math', {
            process: operation,
            firstDigit: firstDigit,
            secondDigit: secondDigit,
            hasAnswer: hasAnswer,
            count: count
        })
    }

    getMathCountDigits(operation, num, limit, direction){
        return axios.post('/api/math', {
            process: operation,
            num: num,
            limit: limit,
            direction: direction
        })
    }

    getMathGeneratedNumbers(operation, count, min, max, hasAnswer){
        return axios.post('/api/math', {
            process: operation,
            min: min,
            max: max,
            hasAnswer: hasAnswer,
            count: count
        })
    }

    getMathGeneratedNumbersOrdering(operation, count, min, max, numPerCount, direction, hasAnswer){
        return axios.post('/api/math', {
            process: operation,
            min: min,
            max: max,
            numPerCount: numPerCount,
            direction: direction,
            hasAnswer: hasAnswer,
            count: count
        })
    }

    getBasicFraction(operation){
        return axios.post('/api/math', {
            process: operation
        })
    }

    getBasicTime(operation){
        return axios.post('/api/math', {
            process: operation
        })
    }

}