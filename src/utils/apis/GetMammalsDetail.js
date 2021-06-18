import axios from "axios";

const GetHerpetoDetail = async (mammals_id) => {
  try {
    const resp = await axios.get("identifikasi/mammals/result/" + mammals_id);
    await console.log(resp);
    // await alert(resp.data.message);
    return resp.data;
  } catch (err) {
    alert(err.response.data.message);
    //goBack
  }
};

export default GetHerpetoDetail;