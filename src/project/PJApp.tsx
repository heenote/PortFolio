import React,{useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import { DotColor } from '@/interface/interface'
import { useMediaQuery } from 'react-responsive'
import { HydrationProvider, Client } from 'react-hydration-provider';

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
        web: 'https://port-folio-ten-chi.vercel.app/'
    },
    {
        img: './img/nomad.png',
        title: '스케줄 관리',
        des:"노마드코더 챌린지 중 개발한 서비스로 달력을 사용해서 일지를 작성하는 프로젝트 ",
        skill:"Javascript / CSS",
        link:'https://github.com/heenote/Schedule_Calendar',
        web: 'https://heenote.github.io/Schedule_Calendar/project.html'
    },
    
]

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  // 모바일
  @media only screen and (max-width: 767px) {
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

  @media only screen and (max-width: 767px) {
    width: 340px;
    overflow: hidden;
  }
`
const DownDiv = styled(UpDiv)`
  margin-top: 20px;
`
const TotalDiv = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    width: 290px;
  }
  
`
const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dadce0;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #dadce0;
  width: 450px;
  height: 530px;
  margin-right: 30px;
  white-space: pre-line;
  position: relative;
  text-align: center;

  @media only screen and (max-width: 767px) {
    width: 300px;
    height: 450px;
    margin: 0px, 20px, 0px, 20px;
  }
`
const ListDiv = styled.div`
  @media only screen and (max-width: 767px) {
    width: 400px;
  }
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

  @media only screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
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
`
const Title = styled.p`
 font-size: 35px;
 font-weight: bold;

 @media only screen and (max-width: 767px) {
    font-size: 25px;
  }
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

 @media only screen and (max-width: 767px) {
    font-size: 16px;
  }
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
  z-index: 5;
  margin-right: 5px;
  &:after{
    transform: rotate(225deg);
  }
`

function PJApp(){
  return(
   <HydrationProvider>
      <Client>
         <ProjectPage />
      </Client>
    </HydrationProvider>
    )
}

const ProjectPage = () => {
  const TOTAL_SLIDE = 2// 배열로 계산
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const isMobil =  useMediaQuery({maxWidth:767})
  const slideRef = useRef<any>(null)

  const Next = ()=>{
    if (currentSlide >= TOTAL_SLIDE) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째로 넘어갑니다.
    } else {
      setCurrentSlide(currentSlide + 1); 
    }
  }

  const Prev = ()=>{
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDE); // 마지막으로 넘어갑니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  useEffect(() => {
    if(slideRef.current != null){
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${(currentSlide * 335)}px)`; //슬라이드로 이동하는 에니메이션을 만듭니다.
    }
  }, [currentSlide]);

  const rendering = () => {
    const result = [];
    for (let i = 0; i < Data.length; i++) {
      result.push(<Dot key={i} num={currentSlide} idx = {i}></Dot>);
    }
    return result;
  };
  return (
    <Section>
        <Container>
          <UpDiv>
            <div>
            {isMobil && <PrevB onClick={Prev}/>}
            </div> 
            <TotalDiv ref={slideRef} >
           {
             Data.map((item: { img: string; title: string ; skill: string ; des: string ; web: string; link: string}, idx: React.Key | null | undefined)=>{
               return(
                <ListDiv key={idx}>
                    <ProjectDiv>
                      <ImgDiv><Img src={item.img}/></ImgDiv>
                        <Title>{item.title}</Title>
                        <SkillSet>{item.skill}</SkillSet>
                      <LineImg src='./img/line.jpeg' />
                      <DesDiv>{item.des}</DesDiv>
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
                    </ListDiv>
                )
              })
            }
            </TotalDiv>
            <div>
            { isMobil && <NextB onClick={Next}/>}
            </div>
           </UpDiv>
           <DownDiv>{isMobil && rendering()}</DownDiv>
        </Container>
    </Section>
  )
}

export default PJApp;