import axios from 'axios';

const UsePost =()=>{
    const post=async(url,data)=>{
        debugger;
        try{
            debugger;
            await axios.post(url,data)
            debugger;
        }catch(error){
            console.error(error);
        }
    }
    return post
}
export default UsePost
