import axios from 'axios';

const UseDelete =()=>{
    const delete1=async(url)=>{
        try{
           await axios.delete1(url)
        }catch(error){
            console.error(error);
        }
    }
    return delete1
}
export default UseDelete