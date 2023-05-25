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
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Right = styled.div`
  flex: 3;
  position: relative;
`
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  margin-top: 180px;
  margin-left: 60px;
  animation: animate 1s infinite ease alternate;

  @keyframes animate{
    to{
      transform: translateY(35px);
    }
  }
`

export const About = () => {
 
  return (
    <>
    <Section>
     <Container>
      <Left>
       <TypeIt
       options={{
        strings:['안녕하세요!!', '프론트엔드 개발자', '조상희입니다.'],
        speed: 100,
        waitUntilVisible: true,            
       }}
       
       getAfterInit={(instance) =>{
        instance.getElement().style.color = 'white'
        instance.destroy();
        return instance
       }}
       
      />
      </Left> 
      <Right>
        <Img src='./img/moon.png' />
      </Right>
      </Container>
    </Section>
    </>
  )
}

export default About;