import React, { useState, useEffect } from 'react'
import './App.css'

export default function App(){
const [jogador1, setJogador1]=useState(true)
const [caixa1, setCaixa1] = useState('')
const [caixa2, setCaixa2] = useState('')
const [caixa3, setCaixa3] = useState('')
const [caixa4, setCaixa4] = useState('')
const [caixa5, setCaixa5] = useState('')
const [caixa6, setCaixa6] = useState('')
const [caixa7, setCaixa7] = useState('')
const [caixa8, setCaixa8] = useState('')
const [caixa9, setCaixa9] = useState('')
const [sinal, setSinal] = useState('X')
const [resultado, setResultado] = useState('')

const clicar=(e)=>{
  if(resultado==''){
  if(jogador1){
    if(e.target.getAttribute('value')==1 && caixa1==''){
      setCaixa1('X')
    }
    else if(e.target.getAttribute('value')==2 && caixa2==''){
      setCaixa2('X')
    }
    else if(e.target.getAttribute('value')==3 && caixa3==''){
      setCaixa3('X')
    }
    else if(e.target.getAttribute('value')==4 && caixa4==''){
      setCaixa4('X')
    }
    else if(e.target.getAttribute('value')==5 && caixa5==''){
      setCaixa5('X')
    }
    else if(e.target.getAttribute('value')==6 && caixa6==''){
      setCaixa6('X')
    }
    else if(e.target.getAttribute('value')==7 && caixa7==''){
      setCaixa7('X')
    }
    else if(e.target.getAttribute('value')==8 && caixa8==''){
      setCaixa8('X')
    }else if(e.target.getAttribute('value')==9 && caixa9==''){
      setCaixa9('X')
    }
  }
  
  else if (!jogador1){
    if(e.target.getAttribute('value')==1 && caixa1==''){
      setCaixa1('O')
    }
    else if(e.target.getAttribute('value')==2 && caixa2==''){
      setCaixa2('O')
    }
    else if(e.target.getAttribute('value')==3 && caixa3==''){
      setCaixa3('O')
    }
    else if(e.target.getAttribute('value')==4 && caixa4==''){
      setCaixa4('O')
    }
    else if(e.target.getAttribute('value')==5 && caixa5==''){
      setCaixa5('O')
    }
    else if(e.target.getAttribute('value')==6 && caixa6==''){
      setCaixa6('O')
    }
    else if(e.target.getAttribute('value')==7 && caixa7==''){
      setCaixa7('O')
    }
    else if(e.target.getAttribute('value')==8 && caixa8==''){
      setCaixa8('O')
    }else if(e.target.getAttribute('value')==9 && caixa9==''){
      setCaixa9('O')
    }
  }
  setJogador1(!jogador1)
} 
}
useEffect(
  ()=>verificar()
)
const verificar=()=>{
  if((caixa1=='O' && caixa2=='O'&& caixa3=='O') || (caixa1=='O' && caixa4=='O' && caixa7=='O') || (caixa1=='O'&&caixa5=='O'&&caixa9=='O') || (caixa2=='O'&&caixa5=='O'&&caixa8=='O') || (caixa3=='O'&&caixa5=='O'&&caixa7=='O') || (caixa3=='O'&&caixa6=='O'&&caixa9=='O') || (caixa4=='O'&&caixa5=='O'&&caixa6=='O') || (caixa7=='O'&&caixa8=='O'&&caixa9=='O')){
    setResultado('O vencedor foi o O')
  }
  else if((caixa1=='O' && caixa2=='O'&& caixa3=='X') || (caixa1=='X' && caixa4=='X' && caixa7=='X') || (caixa1=='X'&&caixa5=='X'&&caixa9=='X') || (caixa2=='X'&&caixa5=='X'&&caixa8=='X') || (caixa3=='X'&&caixa5=='X'&&caixa7=='X') || (caixa3=='X'&&caixa6=='X'&&caixa9=='X') || (caixa4=='X'&&caixa5=='X'&&caixa6=='X') || (caixa7=='X'&&caixa8=='X'&&caixa9=='X')){
    setResultado('O vencedor foi o X')
  }else if(caixa1 != '' && caixa2!='' && caixa3!='' && caixa4!='' && caixa5!='' &&caixa6!='' && caixa7!='' && caixa8!='' && caixa9!=''){
    setResultado('Empate')
  }
}

const recomeçar = ()=>{
 setCaixa1('')
 setCaixa2('')
 setCaixa3('')
 setCaixa4('')
 setCaixa5('')
 setCaixa6('')
 setCaixa7('')
 setCaixa8('')
 setCaixa9('')
 setJogador1(true)
 setSinal('X')
 setResultado('')
}

  return(
    <>
      <h1>Jogo do galo</h1>
      <div class='container'>
        <button class='child'
         value={1} onClick={(e)=>clicar(e)}>{caixa1}</button>
        <button class='child' value={2} onClick={(e)=>clicar(e)}>{caixa2}</button>
        <button class='child' value={3} onClick={(e)=>clicar(e)}>{caixa3}</button>
        <button class='child' value={4} onClick={(e)=>clicar(e)}>{caixa4}</button>
        <button class='child' value={5} onClick={(e)=>clicar(e)}>{caixa5}</button>
        <button class='child' value={6} onClick={(e)=>clicar(e)}>{caixa6}</button>
        <button class='child' value={7} onClick={(e)=>clicar(e)}>{caixa7}</button>
        <button class='child' value={8} onClick={(e)=>clicar(e)}>{caixa8}</button>
        <button class='child' value={9} onClick={(e)=>clicar(e)}>{caixa9}</button>
      </div>
      <p style={{fontSize: '40px'}}>{resultado}</p>
      <button onClick={()=>recomeçar()} style={{padding: '20px', borderRadius:'15px'}}>Recomeçar</button>
    </>
  )
}//posso criar variaveis em react, posso usar break em for

//posso criar várias funcoes que retorna algo e depois juntar todas