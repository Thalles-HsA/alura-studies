import React from 'react';
import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss'

// import { Container } from './styles';

const Cronometro: React.FC = () => {
  return (
    <div className={style.cronometro}>
        <p className={style.titluo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Relogio/>
        </div>
        <Botao>Começar</Botao>
    </div>
    );
}

export default Cronometro;