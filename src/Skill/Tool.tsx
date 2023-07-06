import React from 'react'
import {styled, keyframes} from 'styled-components'

const FrontData = [
  {
    title: "git",
    icon: './icon/icons8-git.png',
    detail: "git을 이용해서 협업을 해본 경험이 있으며, \n githube를 이용한 소스코드 관리를 하고있습니다."
  },
  {
    title: "Notion",
    icon: './icon/icons8-notion.png',
    detail: "Notion의 사용방법과 페이지를 작성할 수 있습니다. \n 주로 공부한 내용을 정리하는 용도이며, \n 이전 회사에서는 진행현황 확인을 위해서 사용했습니다."
  },
  {
    title: "slack",
    icon: './icon/icons8-slack.png',
    detail: "노마드코더 첼린지 중 사용해본 경험이 있습니다. \n 지정된 채널에서 다른 참가자들과 정보를 공유하는 용도로 사용했습니다. "
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