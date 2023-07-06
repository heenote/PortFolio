import React,{useState, useEffect, useMemo, useCallback} from 'react'

type ThemeKey = 'light' | 'dark';

type ReturnType ={
    theme: ThemeKey; 
    isDarkMode: boolean;
    setTheme: (theme: ThemeKey) => void;
    toggleTheme: () => void;
}

const useTheme = (): ReturnType => {
  const [theme, setTheme] = useState<ThemeKey>('light');
  const isDarkMode = useMemo(()=>theme === 'dark', [theme]);

  /**
   * 브라우저의 다크모드 설정여부를 확인하여 preferDarkMode 변수에 저장한다.
   * 로컬 스토리지의 테마 저장값을 확인한 뒤 이 값이 있다면 저장값을 없다면 다크모드 설정시 dark를
   * 모두 해당되지 않거나 설정값이 없는 경우에는 'light'를 defalut값으로 한다.
   */
  const initTheme = useCallback(()=>{
    const preferDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initalTheme = (localStorage?.getItem('theme') || (preferDarkMode ? 'dark' : 'light')) as ThemeKey;
    setTheme(initalTheme)
  },[]);

  // 스토리지, 브라우저 설정에 따른 초기 테마 세팅
  useEffect(()=>{
    initTheme();
  },[])

  // 테마 변경시 dataset, 스토리지 반영
  // 로컬스토리지에 최신값을 저장하며, dataset을 변경하여 글로벌 스타일이 전환되게 한다.
  useEffect(()=>{
    localStorage.setItem('theme', theme);
    document.body.dataset.theme = theme;
  },[theme])

  const toggleTheme = useCallback(()=>{
    setTheme((prev)=>(prev === 'light' ? 'dark' : 'light'));
  },[])
  
  return {theme, isDarkMode, setTheme, toggleTheme}
}

export default useTheme;