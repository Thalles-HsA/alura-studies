import React, { useState, useEffect } from 'react';
import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss'
import { ITarefa } from '../../types/tarefa';
import { tempoParaSegundos } from '../../common/utils/time';

interface Props {
  selecionado: ITarefa | undefined,
  finalizaTarefa: () => void
}

const Cronometro = ({selecionado, finalizaTarefa}: Props) => {

  const [tempo, setTempo] = useState<number>(tempoParaSegundos(String(selecionado?.tempo)));

  useEffect(() => {

    if(selecionado?.tempo){
      setTempo(tempoParaSegundos(selecionado?.tempo))
    }
  },[selecionado]);

  function regressiva(contador: number = 0){
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }

      finalizaTarefa();
      
    }, 1000)
  }


  return (
    <div className={style.cronometro}>
        <p className={style.titluo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Relogio tempo={tempo}/>
        </div>
        <Botao onClick={()=>regressiva(tempo)} >
          Começar
        </Botao>
    </div>
    );
}

export default Cronometro;