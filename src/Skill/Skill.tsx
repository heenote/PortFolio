import React, { useState } from 'react'
import styled from 'styled-components'
import Front from './Front'
import Back from './Back'
import Tool from './Tool'

const Data = [
    'FrontEnd',
    'BackEnd',
    'Tool'
]

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;     

  &:after{
    content: "${(props)=>props.key}";
    position: absolute;
    top:0;
    left: 0;
    width: 0px;
    color: pink;
    overflow: hidden;
    white-space: nowrap;

  }

  &:hover{
    &:after{
        animation: moveText 0.5s linear both;
        @keyframes moveText{
            to{
                width: 100%;
            }
        }
    }
  }
`



export const Skill = () => {
 const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      
    </>
  )
}
