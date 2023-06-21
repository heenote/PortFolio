import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { NotionRenderer } from 'react-notion'
export const NotionId = () => {
  const [response, setResponse] = useState({})
  const router = useRouter();
  useEffect(() => {
    const NOTION_PAGE_ID = 'dd85b1af5b6a4b13b3fd41b96c561e97?pvs=4';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);
  return(
    Object.keys(response).length && (
      <NotionRenderer blockMap={response} fullPage={true} />
    )
  );
}

// export async function getStaticProps({query}: any) {
//     const {link} = query
//     const res = await axios(`http://localhost:3000/api/getNotionData?link=${link}`,  {responseType: 'json'})
//     const data = res.data.data
//     return{
//         props:{
//           data,
//         }
//     }
// }
 
export default NotionId;