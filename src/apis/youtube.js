import axios from 'axios';

const KEY = 'AIzaSyBnE_srp5ccPksefjRhR88ylkvc0nW6Be4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
