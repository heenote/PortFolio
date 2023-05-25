import React ,{useEffect, useRef, useState}from 'react'
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { PerspectiveCamera, Points } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import myFont from "three/examples/fonts/droid/droid_sans_bold.typeface.json";

// textGeometry는 react 구성요소에 맞지않아서
// type으로 any를 주어서 규칙에 위배되지 않게 했다
declare global {
    namespace JSX {
      interface IntrinsicElements {
        textGeometry: any;
      }
    }
  }

export const Sphere = () => {
    extend({ TextGeometry })
    const TEXT_ARR = [
        "Three",
        "CSS",
        "HTML",
        "Firebase",
        "TS",
        "Next.js",
        "JS",
        "yarn",
        "React",
        "Mysql",
        "Redux",
        "Notion",
        "Recoil",
        "Python",
        "Slack",
        "npm",
        "git",
        "Node JS",
        "ES5/ES6",
        "styled-component",
      ];
    const [array, setArray] = useState([]);
    const [pointRef, setPointRef] = useState<any>();
    const font = useRef(new FontLoader().parse(myFont));
    const planeRefArr = useRef<any>([]);
    const checkRef = useRef()
    

    // 렌더링된 모든 프레임에서 효과 실행, 컨트롤 업데이트 등과 같은 코드 실행 가능
    useFrame(({camera, clock})=>{
        const v = 10000;
        const width = 
        window.innerWidth > 1300
        ? 1300
        : window.innerWidth < 500
        ? 1500
        : window.innerWidth < 1000
        ? 1300
        : window.innerWidth;

        const distance = Math.floor(v / width)
        camera.position.x = Math.sin(clock.elapsedTime / 4) * distance
        camera.position.z = Math.cos(clock.elapsedTime / 4) * distance
        camera.lookAt(0,0,0);
        planeRefArr.current.forEach((plane :any)=>{
            plane.lookAt(camera.position.x, camera.position.y, camera.position.z)
        })
    })

    useEffect(()=>{
     if(pointRef){
        let tempP = Array.from(pointRef.geometry.attributes.position.array);
        let newP : any = [];
        for(let i =0; i< tempP.length-3* 5; i+=3){
            const temp = [tempP[i],tempP[i+1],tempP[i+2]];
            if(!temp.includes(0)){
                newP.push(temp)
            }
        }
        setArray(newP)
     }
     console.log(array)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[pointRef, font])

   // map의 각각의 mesh태그에 접근하여서 textGeometry의 위치를 중앙에 위치시키는 함수
   useEffect(()=>{
    planeRefArr.current.forEach((ref: any)=>{
        ref.geometry.center();
        console.log(ref)
    })
   },[array])

  return (
    <>
    <Points ref={(e)=>setPointRef(e)}>
        <PerspectiveCamera  />
        <sphereGeometry args={[3,5,5]} />
        <meshBasicMaterial transparent />
    </Points>
    {
        array.map((arr,i)=>(
         <mesh 
          key={i}
          ref={(e)=>(planeRefArr.current[i] = e)}
          position={[arr[0], arr[1], arr[2]]}
         >
             <textGeometry
            args={[
              TEXT_ARR[i],
              { font: font.current, size: 0.2, height: 0.01 },
            ]}
          />
            <meshLambertMaterial attach="material" color={'orange'} />
         </mesh>
        ))}
    
    </>
  )
}
