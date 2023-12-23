import axios from "axios";

async function GetData() {
  try {
    //Gets user and post datas
    const user = await axios.get(
      `https://raw.githubusercontent.com/ProgrammingHero1/ranga-store-api/main/ranga-api.json`,
    );
    //const user = await axios.get(`https://fakestoreapi.com/products`);
    //Returns merged data
    return user;
  } catch (error) {
    return error.message;
  }
}

export default GetData;
