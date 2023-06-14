import React,{useRef, useState} from 'react'
import styled from 'styled-components'

// 더미 데이터
const Data = [
    {
        img: './img/coin.PNG',
        title: 'CoinRanking',
        des:"Open API를 이용한 Top100까지의 코인순위를 보여주는 프로젝트.",
        skill:"Next.js / Mysql / Typescript / Recoil"

    },
    {
        img: './img/port.PNG',
        title: '포트폴리오',
        des:"진행했던 프로젝트와 나의 정보를 정리해서 보여주는 포트폴리오 개발",
        skill:"Next.js / Styled-components / Typescript / Three.js"
    },
    {
        img: './img/nomad.png',
        title: '투두리스트',
        des:"노마드코더 챌린지 중 개발한 서비스로 달력을 사용해서 일지를 작성하는 프로젝트 ",
        skill:"Javascript / CSS"
    },
]

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

`
const Container = styled.div`
  display: flex;
  width: 1400px;
  align-items: center;
  justify-content: center;
`
const TotalDiv = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
`
const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dadce0;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #dadce0;
  width: 470px;
  height: 530px;
  margin-right: 30px;
  white-space: pre-line;
  position: relative;
`
const Dot = styled.button`
  width: 10px;
  height: 10px;
  background-color: white;
  border-style: none;
`
const ImgDiv = styled.div`
  border-radius: 10px;
  width: 80%;
  height: 150px;
  overflow: hidden;
  margin-top: 10px;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
` 
const LineImg = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100px;
  height: 5px;
`
const IconImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
`
const DesDiv = styled.div`
  margin-top: 20px;
  width: 80%;
  color: gray;
  font-weight: bold;
  font-size: 17px;
  height: 100px;
  text-align: center;
`
const Title = styled.p`
 font-size: 35px;
 font-weight: bold;
`
const IconDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
`
const SkillSet = styled.span`
 font-size: 19px;
`
export const ProjectPage = () => {
  return (
    <Section>
        <Container>
           {
            Data.map((item, idx)=>{
                return(
                    <div key={idx}>
                    <TotalDiv >
                    <ProjectDiv>
                      <ImgDiv>
                        <Img src={item.img}/>
                      </ImgDiv>
                        <Title>{item.title}</Title>
                        <SkillSet>{item.skill}</SkillSet>
                      <LineImg src='./img/line.jpeg' />
                      <DesDiv>
                        {item.des}
                      </DesDiv>
                      <IconDiv >
                      <IconImg src='./icon/icons8-internet.png'/>
                      <IconImg src='./icon/icons8-github.png'/>
                      </IconDiv>
                    </ProjectDiv>
                    </TotalDiv>
                    </div>
                )
            })
           }
        </Container>
    </Section>
  )
}

export default ProjectPage;