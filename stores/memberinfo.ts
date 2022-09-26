import { defineStore } from "pinia";
import axios from "axios";

export const memberInfo = defineStore("memberInfo", () => {
  const myInfo = ref({
    id: "",
    identity: "",
  });
  const setMemberInfo = (type, data) => {
    myInfo.value[type] = data;
    console.log("ssss");
    try {
      console.log("3333");
      const response = axios
        .get(`https://jsonplaceholder.typicode.com/users`)
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
  return { myInfo, setMemberInfo };
});
