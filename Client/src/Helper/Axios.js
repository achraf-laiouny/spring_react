import axios from "axios";
const axiosFetch = async ({ url, method, data = null }) => {
  //api to fetch data from postman mock server
  try {
    // axios.get("dsa", {});
    console.log("error");
    let token =  sessionStorage.getItem("token");
    console.log(" token before " + token);

    if(token !== null || token !== undefined ){
       token = JSON.parse(sessionStorage.getItem("user") ?? "{}").token;
    } 
    console.log(" token " + token);
    const response = await axios.request({
      url: "http://localhost:8080/" + url,
      method,
      data: data,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export default axiosFetch;
