import axios from "./axios";

const verify = async (token) => {
    try{
        await axios.get('/api', {
            headers: {
                'x-access-token': token
            }
        })
            .then((res)=>{
                return true;
            })
            .catch((err)=>{
                return false;
            })
    }catch (err){
        return false;
    }
}

export default verify;