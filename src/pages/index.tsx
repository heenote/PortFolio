import { current } from '@/interface/interface'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import About from '@/AboutMe/About'
const Navbar = styled.div` 
  display: flex;
  width: 100%;
  height: 70px;
  position: fixed;
  top:0;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`
const NavLogo = styled.div`
  width: 250px;
  padding-left: 20px;
`

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  padding-right:350px;
`
const ListItem = styled.li`
  color: white;
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
  height: 100vh;
  font-size: 80px;
  &::-webkit-scrollbar{
    display: none;
  }
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
       <NavLogo >
        <NavNameText >조상희</NavNameText>
        <NavproText >Portfolio</NavproText> 
       </NavLogo> 
       <List>
       <ListItem onClick={()=>{
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
       }}>Main</ListItem>
       <ListItem onClick={()=>{
        window.scrollTo({
          top:currentSize.currentWindowHeight * 1,
          behavior:'smooth'
        })
       }}>About</ListItem>
       <ListItem onClick={()=>{
        window.scrollTo({
          top: currentSize.currentWindowHeight * 2,
          behavior:'smooth'
        })
       }}>Project</ListItem>
       <ListItem onClick={()=>{
        window.scrollTo({
          top: currentSize.currentWindowHeight * 3,
          behavior:'smooth'
        })
       }}>Last</ListItem>
       </List>
     </Navbar> 
     <Inner>
      <About/>
     </Inner>
     <Inner>기술스텍</Inner>
     <Inner>프로젝트</Inner>
     <Inner>마지막</Inner>
    </div>
  )
}
