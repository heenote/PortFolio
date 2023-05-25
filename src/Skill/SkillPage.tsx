import React from 'react'
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components'
import { Sphere } from './Sphere';

const Data = [
    'FrontEnd',
    'BackEnd',
    'Tool'
]

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center; 

`
const Right = styled.div`
  flex: 1;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap:20px;
`
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;     

  &:after{
    content: "${(props)=>props.key}";
    
  }
`


export const SkillPage = () => {
  return (
    <>
     <Section>
        <Container>
            <Left>
              <List>
                {
                  Data.map((item : string)=>(
                     <ListItem key={item}>{item}</ListItem>
                  ))
                }
              </List>
            </Left>
            <Right>
               <Canvas>
                 <ambientLight intensity={1}/>
                 <directionalLight position={[3,2,1]}/>
                 <Sphere/>
               </Canvas>
            </Right>
        </Container>
     </Section>
    </>
  )
}

export default SkillPage;