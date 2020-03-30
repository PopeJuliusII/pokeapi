import React from 'react';
import style from './Pokemon.module.css'


const Pokemon = ({data}) => {
  return (
    <div class={style.pokemon}>
      <img src={data.sprites.front_default} />
      <p>{data.name}</p>
      <p>{data.id}</p>
    </div>
  )
}

export default Pokemon;
