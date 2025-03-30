const Mensaje = (promps) => {
    console.log(promps) // Imprimimos el objeto params en la consola
    return <h1 style={{color: promps.color}}>
        {promps.message}
    </h1>
  }

  export default Mensaje; // Exportamos el componen