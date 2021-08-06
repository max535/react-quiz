import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-43b15-default-rtdb.firebaseio.com/'
});