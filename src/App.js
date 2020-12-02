import './App.css';
import React, { useState } from 'react';

function App() {
  const [lista, setLista]=useState([]);
  function salvar(event){
    event.preventDefault()
    const item = {
      atividade: event.target.elements.atividades.value,
      done: false
    }
    setLista([...lista,item])
    console.log(lista);
  }
  function deletar(item){
    setLista(lista.filter((atividade,index)=>{
      if (item !== index){
        return atividade;
      }
    }));
  }
  function editar(item){
    setLista(lista.map((atividade,index)=>{
      if (item !== index){
        return atividade;
      }
      else{
        atividade.atividade = prompt("digite um novo nome")
        return atividade;
      }
    }
    ))
  }
  return (
    <div className="container">
      <form onSubmit={salvar}>
        <input type="text" name="atividades" placeholder="#"/>
        <input type="submit" value="enviar"/>
      </form>
      <ul>
        {lista.map((tarefa, index)=>{
          return <li>{tarefa.atividade} <button onClick={()=>deletar(index)} id={index}>Deletar</button> <button onClick={()=>editar(index)}>Editar</button> </li>
        })}
      </ul>
    </div>
  );
}

export default App;
