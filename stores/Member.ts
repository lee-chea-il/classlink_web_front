import { defineStore } from 'pinia';
import axios from "axios"

export const member = defineStore('Member', () => {
  const myInfo = ref({});
  const loginPageType = ref('login');

  //post
  /*const getIdFromEmail = (email) => {
    const eData ={
      "memEmail": ''
    };
    eData.memEmail=email;
    console.log('email   ',email);
    const response = axios.post(`http://localhost:8301/getMemId`,eData)
    .then(res => {
      console.log(`status: ${JSON.stringify(res.status)}`);     // 응답 Status code
      console.log(`headers: ${JSON.stringify(res.headers)}`);   // 응답 Headers
      console.log(`data: ${JSON.stringify(res.data)}`);         // 응답 Data

      searchIdList.value = res.data.data;
    });
    console.log('response   ',response,email);
  }
  
  //put
  const searchId = async (email) => {
    const bookData ={
      "memId": "user1",
      "memPwd":"zncbb12",
      "memEmail":"a777@test.com",
      "memName":"닉네임1"
    }
    try{
      //insert
      /*
      const bookData ={
        "memId": "user1",
        "memPwd":"zncbb12",
        "memEmail":"a777@test.com",
        "memName":"닉네임1"
      }
      * /
      const response = axios.post(`http://localhost:8301/insertMember`,bookData)
      .then(res => {
        console.log(`status: ${JSON.stringify(res.status)}`);     // 응답 Status code
        console.log(`headers: ${JSON.stringify(res.headers)}`);   // 응답 Headers
        console.log(`data: ${JSON.stringify(res.data)}`);         // 응답 Data
      });
      console.log('response   ',response);

      //delete
      /*const bookData ={
        "memIdx": 24
      }
      const response = axios.delete(`http://localhost:8301/deleteMember`,{data:bookData})
      .then(res => {
        console.log(`status: ${JSON.stringify(res.status)}`);     // 응답 Status code
        console.log(`headers: ${JSON.stringify(res.headers)}`);   // 응답 Headers
        console.log(`data: ${JSON.stringify(res.data)}`);         // 응답 Data
      });
      console.log('response   ',response);*/
      
      /*
      //put
      const bookData ={
        "memIdx": 24,
        "memPwd": "1111czdd"
      }
      const response = axios.put(`http://localhost:8301/updateMember`,bookData)
      .then(res => {
        console.log(`status: ${JSON.stringify(res.status)}`);     // 응답 Status code
        console.log(`headers: ${JSON.stringify(res.headers)}`);   // 응답 Headers
        console.log(`data: ${JSON.stringify(res.data)}`);         // 응답 Data
      });
      console.log('response   ',response);
      */

      /*
      //get
      const response = axios.get(`http://localhost:8301/puttest`)
      .then(res => {
        console.log(`status: ${JSON.stringify(res.status)}`);     // 응답 Status code
        console.log(`headers: ${JSON.stringify(res.headers)}`);   // 응답 Headers
        console.log(`data: ${JSON.stringify(res.data)}`);         // 응답 Data
      });
      console.log('response   ',response,email);
      * /

      return response;
    }catch(e){}
  }*/
  return { myInfo, loginPageType }
})