import { defineStore } from "pinia";
import axios from "axios";

export const memberJoin = defineStore("MemberJoin", () => {
  const myInfo = ref({
    id: "",
    identity: "",
  });
  const setMyInfo = (type, data) => {
    myInfo.value[type] = data;
    console.log(data);
    try {
      console.log("멤버시작");
      /*
      .get(`http://localhost:8301/updatetest`, {
          memEmail: "winsori7@naver.com",
          memId: "winsori",
          memIdx: "1",
          memName: "테스트",
          mem_sex: "M",
        })
      */
      /*
      .post(`http://localhost:8301/updatetest`, {
          memEmail: "winsori7@naver.com",
          memId: "winsori",
          memIdx: "1",
          memName: "테스트",
          mem_sex: "M",
        })
        */
      const response = axios
        .put(`http://localhost:8301/updatetest`, {
          memEmail: "winsori7@naver.com",
          memId: "winsori",
          memIdx: 1,
          memName: "테스트999",
          mem_sex: "M",
        })
        //const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)//'http://112.171.101.31:3106/aip/data/1'
        .then((res) => {
          console.log(`status: ${res.status}`); // 응답 Status code
          console.log(`headers: ${res.headers}`); // 응답 Headers
          console.log(`data: ${res.data}`); // 응답 Data
        });
      console.log("response   ", response);
      /*const response = await axios.get('url주소',{
        params:{
          //url 뒤에 붙는 param id값
          id: 12345
        }
      });*/
    } catch (error) {
      console.log("error");
    }
  };

  //put
  const searchId = async (email) => {
    const bookData = {
      memId: "user1",
      memPwd: "zncbb12",
      memEmail: "a777@test.com",
      memName: "닉네임1",
    };
    try {
      //insert
      /*
      const bookData ={
        "memId": "user1",
        "memPwd":"zncbb12",
        "memEmail":"a777@test.com",
        "memName":"닉네임1"
      }
      */
      //post
      const response = axios
        .post(`http://localhost:8301/insertMember`, bookData)
        .then((res) => {
          console.log(`status: ${JSON.stringify(res.status)}`); // 응답 Status code
          console.log(`headers: ${JSON.stringify(res.headers)}`); // 응답 Headers
          console.log(`data: ${JSON.stringify(res.data)}`); // 응답 Data
        });
      console.log("response   ", response);

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
    } catch (e) {}
  };
  return { myInfo, setMyInfo, searchId };
});
