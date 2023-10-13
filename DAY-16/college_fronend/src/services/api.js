import axios from "axios";


let jwtToken = localStorage.getItem('Token')


const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

const URI = 'http://localhost:8181'
const adminLogin=(logins)=>axios.post(`${URI}/api/v1/auth/login`,logins)
const userRegister = (signup) => axios.post(`${URI}/api/v1/auth/register`, signup)
const userLogin = (signin) => axios.post(`${URI}/api/v1/auth/login`, signin)
const userInfo=(info)=>axios.post(`${URI}/candidate`,info,{headers})
const getStudents=(stud)=>axios.get(`${URI}/read-candidate`,stud,{headers})
const deleteStudents=(id)=>axios.delete(`${URI}/delete-candidate/${id}`,{headers})
export {userRegister,userLogin,adminLogin,userInfo,getStudents,deleteStudents};
