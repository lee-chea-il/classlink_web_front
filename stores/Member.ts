import { defineStore } from 'pinia';
import axios from "axios"

export const member = defineStore('Member', () => {
  const myInfo = ref({});
  const loginPageType = ref('login');
  const searchIdList = ref([]);

  //get
  const getIdFromEmail = (email) => {
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
  
  //post
  const checkLogin = (data) => {
    const loginData ={
      "memId": data.id,
      "memPwd":data.pwd
    };
    //loginPageType.value = 'identity';
    /**/
    //api 활성화되면 주석 해제 할것
    try{
      const response = axios.post(`http://localhost:8301/getLogin`,loginData)
      .then(res => {
        console.log(`status: ${JSON.stringify(res.status)}`);     // 응답 Status code
        console.log(`headers: ${JSON.stringify(res.headers)}`);   // 응답 Headers
        console.log(`data: ${JSON.stringify(res.data)}`);         // 응답 Data
        
        myInfo.value = res.data.data;
        
        if(res.status == 200){
          if(res.data.returnCode=='_200'){
            loginPageType.value = 'identity';
          }else if(res.data.returnCode=='_01'){
            alert(res.data.returnMessage);
          }else if(res.data.returnCode=='_02'){
            alert(res.data.returnMessage);
          }
        }else{

        }
      });
      return response;
    }catch(e){}
    /**/
  };
  
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
      */
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
      */

      return response;
    }catch(e){}
  }
  return { myInfo, loginPageType, checkLogin, getIdFromEmail, searchIdList, searchId }
})