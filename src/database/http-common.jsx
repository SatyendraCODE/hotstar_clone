import axios from "axios";

export default axios.create({
    baseURL:"https://nervous-wrap-duck.cyclic.app/",
    headers:{
        "Content-type": "application/json"
    }
})