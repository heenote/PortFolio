import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { DotColor } from '@/interface/interface'
// 더미 데이터
const Data = [
    {
        img: './img/coin2.PNG',
        title: 'CoinRanking',
        des:"Open API를 이용한 Top100까지의 코인순위를 보여주는 프로젝트.",
        skill:"Next.js / Mysql / Typescript / Recoil",
        link:'https://github.com/Coin-React-Project/CoinRank',
        web: 'https://heenote.github.io/Schedule_Calendar/project.html'
    },
    {
        img: './img/port.jpg',
        title: '포트폴리오',
        des:"진행했던 프로젝트와 나의 정보를 정리해서 보여주는 포트폴리오 개발",
        skill:"Next.js / Styled-components / Typescript / Three.js",
        link:'https://github.com/heenote/PortFolio',
        web: 'https://heenote.github.io/Schedule_Calendar/project.html'
    },
    {
        img: './img/nomad.png',
        title: '스케줄 관리',
        des:"노마드코더 챌린지 중 개발한 서비스로 달력을 사용해서 일지를 작성하는 프로젝트 ",
        skill:"Javascript / CSS",
        link:'https://github.com/heenote/Schedule_Calendar',
        web: 'https://heenote.github.io/Schedule_Calendar/project.html'
    },
    {
      img: './img/coin2.PNG',
      title: '에시',
      des:"Open API를 이용한 Top100까지의 코인순위를 보여주는 프로젝트.",
      skill:"Next.js / Mysql / Typescript / Recoil",
      link:'https://github.com/Coin-React-Project/CoinRank',
      web: 'https://heenote.github.io/Schedule_Calendar/project.html'
  },
]

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  // 모바일
  @media only screen and (max-width: 767px) {
    height: auto;
    margin-top: 100vh;
  }

`
const Container = styled.div`
  width: 1400px;
  margin-top: 100px;

`
const UpDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const DownDiv = styled(UpDiv)`
  margin-top: 20px;
`
const TotalDiv = styled.div`
  display: flex;
`
const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dadce0;
  //color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #dadce0;
  width: 450px;
  height: 530px;
  margin-right: 30px;
  white-space: pre-line;
  position: relative;
`
const Dot = styled.div<DotColor>`
  width: 10px;
  height: 10px;
  margin-left: 7px;
  border-radius: 50%;
  background-color: ${(props)=>props.num === props.idx ? 'darkgray' : 'black'} ;
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
const NextB = styled.div`
  position: relative;
  cursor: pointer;
  &:after{
    position: absolute;
    left: 0; 
    top: 0; 
    content: '';
    width: 15px; /* 사이즈 */
    height: 15px; /* 사이즈 */
    border-top: 3px solid var(--text-main); /* 선 두께 */
    border-right: 3px solid var(--text-main); /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
  }
`
const PrevB = styled(NextB)`
  margin-right: 45px;
  &:after{
    transform: rotate(225deg);
  }
`
export const ProjectPage = () => {
  const [lastNumber, setLastNumber] = useState<number>(3);
  const [firstNumber, setFirstNuber] = useState<number>(0);
  const [list, setList] = useState<any>([])
  const DotNum = Data.length % 3 === 0 ? Math.floor(Data.length / 3) : Math.floor(Data.length / 3) + 1 
  useEffect(()=>{
    let item = Data.slice(firstNumber,lastNumber)
    setList(item)
  },[lastNumber, firstNumber])

  const Next = ()=>{
    let LplusNum = lastNumber + 1;
    let FplusNum = firstNumber + 1;
    setLastNumber(LplusNum)
    setFirstNuber(FplusNum)
  }

  const Prev = ()=>{
    let LminNum = lastNumber - 1;
    let FminNum = firstNumber -1;
    setLastNumber(LminNum)
    setFirstNuber(FminNum) 
  }
  const rendering = () => {
    const result = [];
    for (let i = 0; i < DotNum; i++) {
      result.push(<Dot key={i} num={lastNumber} idx = {i+3}></Dot>);
    }
    return result;
  };
  return (
    <Section>
        <Container>
          <UpDiv>
          {
          firstNumber === 0 ? null : <PrevB onClick={Prev} />
          }
           {
            list.map((item: { img: string; title: string ; skill: string ; des: string ; web: string; link: string}, idx: React.Key | null | undefined)=>{
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
                       <a
                      target='_blank'
                      href={item.web}
                      rel='noreferrer'>
                      <IconImg src='./icon/icons8-internet.png'/>
                      </a>
                      <a
                       target='_blank'
                       href={item.link}
                       rel='noreferrer'>
                      <IconImg src='./icon/icons8-github.png'/>
                      </a>
                      </IconDiv>
                    </ProjectDiv>
                    </TotalDiv>
                    </div>
                )
            })
           }
           {
            lastNumber === Data.length ? null :<NextB onClick={Next}/>
           }
           </UpDiv>
           <DownDiv>{rendering()}</DownDiv>
        </Container>
    </Section>
  )
}

export default ProjectPage;