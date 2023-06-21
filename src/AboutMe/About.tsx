import React from 'react'
import TypeIt from "typeit-react";
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
 `
const Left = styled.div`
  flex: 1;
  width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
`
const Img = styled.img`
  width: 800px;
  height: 600px;
  margin-right: 50px;
  object-fit: contain;
  animation: animate 1s infinite ease alternate;

  @keyframes animate{
    to{
      transform: translateY(35px);
    }
  }
`
const AboutMe = styled.div`
  margin-top: 20px;
  width: 640px;
  font-size: medium;
  position: relative;
  overflow: hidden;
  animation: fadein 7s ease-in-out;
  white-space: pre-line;
  color: white;
  @keyframes fadein{
    0%{
      opacity: 0;
      transform: translateY(20px);
    }
    100%{
      opacity: 1;
      transform: none;
    }
  }
`
const IconDiv =styled.div`
  display: flex;
  margin-top: 15px;
`
const IconImg = styled.img`
 width: 30px;
 height: 30px;
 cursor: pointer;
 margin-right: 10px;
`
const MainText = styled.span`
 font-size: 25px;
 font-weight: bold;
`
export const About = () => {
 
  return (
    <>
    <Section>
     <Container>
      <Left>
      <Img src='./img/moon.png' />
      </Left>
      <Right>
       <TypeIt
       options={{
        strings:['안녕하세요!! 프론트엔드개발자 조상희입니다.'],
        speed: 100,
        waitUntilVisible: true,            
       }}
       
       getAfterInit={(instance) =>{
        instance.getElement().style.color = 'white'
        instance.destroy();
        return instance
       }}
       
      />
      <AboutMe>
        <MainText>자기소개</MainText>
        <div style={{marginTop:"15px"}}>
        {"저는 2022년부터 7개월간의 인턴 경험으로 프론트엔드 개발자를 꿈꾸게 되었습니다."}
        <p></p>
        {"개발 성장을 위해 html, css, Js도 계속 공부하고 있으며, 주로 React와 Next.js를 사용해서 개발을 진행하고 있습니다. \n"}
        {"백엔드 언어로는 현재 파이썬을 공부하고있으며, django를 사용가능합니다. \n"}
        <p></p>
        {"진행했던 프로젝트들은 깃허브에 커밋하고 있고, \n 블로그도 주기적으로 업로드하고 있습니다."}
        <p></p>
        </div>
        <MainText>링크</MainText>
        <IconDiv>
        <a 
         target='_blank'
         href='https://github.com/heenote'
         rel='noreferrer'
        >
        <IconImg src='./icon/icons8-github.png' />
        </a>
        <a>
        <IconImg src='./icon/icons8-v.png' />
        </a>
        <a>
        <IconImg src='./icon/icons8-instagram.png' />
        </a>
        </IconDiv>
      </AboutMe>
      </Right>
      
      </Container>
    </Section>
    </>
  )
}

export default About;