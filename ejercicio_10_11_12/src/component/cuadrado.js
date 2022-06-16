import React from 'react';

const Cuadrado = () => {
  const rgb = {
    red: generateColor(),
    blue: generateColor(),
    green: generateColor()

  }

  function generateColor(){
    let color =  Math.floor(Math.random() * 256)
    return  color;
  }
  
  function changeBackground(e){
    console.log("Cambiando el backgroundColor")
    generateColor();
    e.target.style.backgroundColor = `rgb(${rgb.red},${rgb.blue},${rgb.green})`;
  }
  function stopChangeBackground(e){
    console.log("Paramos el cambio de color")
    clearInterval(e)
  }
  function exitMouse(e){
    console.log("Mouse fuera del rectangulo")
    stopChangeBackground()
  }

  return (
    <div>
       <div
          style={{
            backgroundColor: 'rgb(0,0,0)',
            width:'255px',
            height:'255px'
            }}
          onMouseEnter={changeBackground}
          onMouseOut={exitMouse}
          onDoubleClick={stopChangeBackground}
          >

        </div>
    </div>
  );
}

export default Cuadrado;
