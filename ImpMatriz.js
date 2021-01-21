const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
  ];
  
  // escribe tu código debajo de esta línea
  //i = 0
  //j = i
  
  for (let i = 0; i < mat.length; i++) {
    mat[i][i] = "  " + mat[i][i];
    for (let j = 0; j < i; j++) {
      
    }
  }
  
  console.log(mat)
