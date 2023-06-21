import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {link} = req.query
    console.log(link)
   return new Promise<void>((resolve, rejects)=>{
    fetch(`https://notion-api.splitbee.io/v1/page/${link}`)
      .then(res => res.json())
      .then((resJson) => {
        res.json(resJson)
        resolve();
      })
       .catch(err =>{
           console.error('error:' + err)
           resolve() 
       } 
       )
   })

    }