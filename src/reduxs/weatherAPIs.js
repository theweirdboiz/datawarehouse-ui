import axios from 'axios'

export const getWeather = () => {
    return axios
            .get('http://localhost:8080/getWeathersCurrent')
            .then(response => response.data)
            .catch(error => Promise.reject(error))
}

export const getDetailWeather = (id) => {
    return axios
        .get('http://localhost:8080/getDetailWeather',
            {
                params: {id: id}
            }
        )
        .then(response => response.data)
        .catch(error => Promise.reject(error))
}