import styles from '@/styles/Home.module.css'
import { current } from '@/interface/interface'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  background-color: #16345A;
  width: 100%;
  max-width: 100%;
  height: 70px;
  position: fixed;
  top:0;
`

const NavsubText = styled.h3`
  margin-right: 40px;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;
`

const NavproText = styled.span`
  display: block;
  font-size: 2rem;
  font-family: 'Staatliches', cursive;
  color: #F1C164;
  text-shadow: 2px 2px #2D63A7;
  margin: 0;
  text-align: center;
`

const NavNameText = styled.span`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  color: #f1f1f1;
  letter-spacing: 5px;
  text-align: center;
  margin-left: 15px;
`

const Inner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`

export default function Home() {
  const [totalPage, setTotalPage] = useState<number>(0)
  const [currentSize, setCurrentSize] = useState<current>(
    typeof window !== 'undefined'?
    {
    currentWindowHeight: window.innerHeight,
    page:0
  }
  :
  {
    currentWindowHeight: 0,
    page:0
  }
  )

  // outer 클래스의 자식element의 개수를 가지고온다
  useEffect(()=>{
    const pageDiv = document.getElementsByClassName('outer')
    const totalPageNum = pageDiv[0]?.children?.length - 1
    setTotalPage(totalPageNum)
  },[])

  // 유저가 화면 크기를 바꿀 경우를 위해 윈도우 사이즈 조정
  const setPageSize = () =>{
    setCurrentSize({currentWindowHeight: window.innerHeight})
  }

  // 현재 페이지가 몇 페이지인지 구하는 함수
  const setPage = () =>{
    for (let i = 1; i < totalPage; i++){
      if(window.scrollY < currentSize.currentWindowHeight * i){
        setCurrentSize({...currentSize, page: i})
        return;
      }
    }
  }

  // Scroll Event와 Resize시 무한 반복을 피하기 위함
  useEffect(() => {
    window.addEventListener("scroll", setPage,);
    window.addEventListener("resize", setPageSize);
    return () => {
      window.removeEventListener("scroll", setPage);
      window.removeEventListener("resize", setPageSize);
    };
  });

  useEffect(()=>{
    window.addEventListener('wheel',(e)=>{
    // 마우스 휠 내릴떄
    if(e.deltaY > 0){
      let p =1;
      while(p < totalPage){
        if(currentSize.page === p){
          window.scrollTo({
            top:currentSize.currentWindowHeight * p,
            behavior: 'smooth'
          });
        }
        p++;
      }
    }
    else if (e.deltaY < 0){
      let p =1;
      while(p< totalPage){
        if(currentSize.page === p){
          window.scrollTo({
            top:currentSize.currentWindowHeight * (p-1),
            behavior: 'smooth'
          });
      }
      p++;
    }
  }
  })
})
  return (
    <div  className="outer" >
     <Navbar>
       <div style={{display:'block', width:'15%'}}>
        <NavNameText >조상희</NavNameText>
        <NavproText >Portfolio</NavproText> 
       </div> 
       <div style={{display: 'flex', marginLeft:'30%'}}>
       <NavsubText onClick={()=>{
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
       }}>Main</NavsubText>
       <NavsubText onClick={()=>{
        window.scrollTo({
          top:currentSize.currentWindowHeight * 1,
          behavior:'smooth'
        })
       }}>About</NavsubText>
       <NavsubText onClick={()=>{
        window.scrollTo({
          top: currentSize.currentWindowHeight * 2,
          behavior:'smooth'
        })
       }}>Project</NavsubText>
       <NavsubText onClick={()=>{
        window.scrollTo({
          top: currentSize.currentWindowHeight * 3,
          behavior:'smooth'
        })
       }}>Last</NavsubText>
       </div>
     </Navbar> 
     <Inner style={{backgroundColor:'blue'}}>메인</Inner>
     <Inner style={{backgroundColor:'red'}}>기술스텍</Inner>
     <Inner style={{backgroundColor:'yellow'}}>프로젝트</Inner>
     <Inner style={{backgroundColor:'gray'}}>마지막</Inner>
    </div>
  )
}
