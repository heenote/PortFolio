import React,{useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera} from '@react-three/drei'
import styled from 'styled-components'
import { Sphere } from './Sphere';
import Front from './Front'
import Back from './Back'
import Tool from './Tool'

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
    content: "${(props) => props.key}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    &:after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

`

export const SkillPage = () => {
  const [open, setOpen] = useState<string>("")
  return (
    <>
     <Section>
        <Container>
            <Left>
            <List>
            { Data.map((item : string, idx:number)=>{
                return(
                    <>
                      <ListItem key={item} onClick={()=>setOpen(item)}>{item}</ListItem>
                       <div key={idx}>
                        {
                          open === "FrontEnd" ? (
                             <Front/>
                          ) : (
                            open === "BackEnd" ?
                            (
                              <Back/>
                            ) :(
                              open === "Tool" ? (
                                <Tool/>
                              ) : <div></div>
                            ) 
                          )
                        }
                       </div>
                    </>
                      )
                        
                  })
            }
            </List>
            </Left>
            <Right>
               <Canvas>
                <PerspectiveCamera position={[1,1,1]}/>
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