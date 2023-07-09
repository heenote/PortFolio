import React,{useState, useRef, useEffect} from 'react'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera} from '@react-three/drei'
import styled from 'styled-components'
import { Sphere } from './Sphere';
import { ListItemText, SkillList } from '@/interface/interface';
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
  
  @media only screen and (max-width: 768px) {
    height: 200vh;
    margin-top: 100vh;
  }
`
const Container = styled.div`
  display: flex;
  width: 1400px;

  // 모바일
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center; 

  // 모바일
  @media only screen and (max-width: 767px) {
    flex:1;
    width: 100%;
    margin-left: 200px;
  }
`
const Right = styled.div`
  flex: 1;
`
const List = styled.ul<SkillList>`
  display: flex;
  flex-direction: ${(props)=> props.check === "" ? 'column' : null};
  gap:40px;
  margin: 0px;
  padding: 0px;
`
// styled-component로 만든 컴포넌트에 매개변수를 지정해서 사용하고 싶으면
// No overload matches this call 타입 에러를 없애기 위해서 interface type을 생성해서 
// 속성의 타입을 명시해주어야한다.
const ListItem = styled.li<ListItemText>`
  font-size: ${(props)=> props.check === "" ? '90px': "50px"};
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.check === props.text ? 'orange' : 'transparent'};
  -webkit-text-stroke: 1px var(--text-main);
  position: relative;

  // key값으로 받으면 실행이 안되므로 text라는 매개변수를 사용해야한다.
  &:after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: orange;
    width: 0px;
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
const LeftDiv = styled.div`
`

const DetailDiv = styled.div<SkillList>`
  width: ${(props)=> props.check === "" ? null: "550px"};
  margin-top: 15px;
`
export const SkillPage = () => {
  const [open, setOpen] = useState<string>("")
  
  const ref = useRef<HTMLDivElement | null>(null)

  // List 외부 클릭시 SkillSet으로 돌아옴
  useEffect(()=>{
    const close = (e: { target: any; }) =>{
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 빈문자열로 변환
      if(open !== "" && (!ref.current?.contains(e.target))) setOpen("")
    }
    document.addEventListener('click', close)
    return ()=> document.removeEventListener('click', close);
  },[open])

  return (
    <>
     <Section>
        <Container>
            <Left>
             <LeftDiv> 
            <List ref ={ref} check ={open}>
            { Data.map((item : string)=>{
                return(                  
                      <ListItem key={item} text={item} check={open} onClick={()=>setOpen(item)}>
                        {item}  
                      </ListItem>
                      )    
                    })
                  }
                </List>
                <DetailDiv check={open}>  
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
                  </DetailDiv>
                  </LeftDiv>
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