import React from 'react'
import {styled, keyframes} from 'styled-components'

const FrontData = [
  {
    title: "JS",
    title2: 'TS',
    icon: './icon/icons8-JS.png',
    icon2: './icon/icons8-type.png',
    detail: "JavaScript의 동작원리를 이해하고, \n interface를 사용하여 type을 정의할수있습니다."
  },
  {
    title: "React",
    icon: './icon/icons8-react.png',
    detail: "렌더링과 hook에 대해서 이해하고 있으며, \n 재사용성이 용이하고 가독성 좋은 코드를 작성할 수 있습니다."
  },
  {
    title: "Next.js",
    icon: './icon/icons8-next.svg',
    detail: "SSR, SSG에 대해 이해하고 있고, \n API를 사용해서 웹 개발을 한 경험이 있습니다."
  },
  {
    title: "CSS",
    icon: './icon/icons8-css.png',
    detail: "styled-component를 주로 사용하며 \n props를 이용한 조건부 렌더링을 사용할 수 있습니다. \n 반응형 웹 스타일링을 선호합니다."
  }
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
  /* height: 450px; */
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px 3px gray;
  justify-content: center;
  border-radius: 5px;
  animation: ${loadEffect} 0.6s ease-in-out;
`
const Title = styled.div`
  font-size: 25px;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 10px;
`
const Detail = styled.div`
  font-size: 18px;
  color: white;
  white-space: pre-line;
`
const DataDiv = styled.div`
  margin:5px 0px 30px 10px ;
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
                { item.icon2 ?
                <><IconImg src={item.icon2} /><Title>{item.title2}</Title></>
                 : null
                }
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