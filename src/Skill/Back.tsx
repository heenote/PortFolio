import React from 'react'
import {styled, keyframes} from 'styled-components'

const FrontData = [
  {
    title: "Node.js",
    icon: './icon/icons8-node.png',
    detail: "express를 사용해본 경험이 있습니다. \n rest api를 사용해 Data를 처리해본 경험이 있습니다."
  },
  {
    title: "Python",
    icon: './icon/icons8-python.png',
    detail: "Python을 사용해서 알고리즘 문제를 풀고있으며, \n Beautifulsoup를 사용해 웹 크롤링을 해본 경험이 있습니다."
  },
  {
    title: "Mysql",
    icon: './icon/icons8-mysql.png',
    detail: "workbench을 사용해서 데이터베이스를 작성한 경험이 있으며, \n CRUD을 사용해서 데이터관리를 할수있고 \n React, Next.js에 적용해서 사용가능합니다. "
  },
  
]

const loadEffect = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-30px);
  }
  50%{
    opacity: 0.5;
    transform: translateX(30px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
`
const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px 3px gray;
  border-radius: 5px;
  animation: ${loadEffect} 0.6s ease-in-out;

  @media only screen and (max-width: 767px) {
    width: 350px;
  }
`
const Title = styled.div`
  font-size: 25px;
  //color: white;
  font-weight: bold;
  margin-bottom: 10px;
`
const Detail = styled.div`
  font-size: 18px;
  //color: white;
  white-space: pre-line;
`
const DataDiv = styled.div`
  margin: 20px 0px 30px 10px ;
  
`
const IconImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
const Front = () => {
  return (
    <Container>
        {
          FrontData.map((item, idx) =>{
            return(
              <DataDiv key={idx}>
                 <div style={{display:"flex"}}>
                <IconImg src={item.icon} />
                <Title>{item.title}</Title>
                </div>
                <Detail>{item.detail}</Detail>                
              </DataDiv>
            )
          })
        }
    </Container>
  )
}

export default Front