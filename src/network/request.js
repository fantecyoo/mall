import axios from 'axios'
export function request(config){
    const instance1= axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5" ,
        timeout:5000
    })
    instance1.interceptors.request.use(config=>{
        return config;
    },err=>{console.log(err)});

    instance1.interceptors.response.use(res=>{
        return res;
    },err=>{
        console.log(err)
    })

    return instance1(config)
}