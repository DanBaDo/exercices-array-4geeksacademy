# Arrays

## Ejercicio 1
Itera un array proporcionado entregando los índices en los que se encuentra un valor determinado.

Se proporcionan dos versiones (imperativa/declarativa) que sólo se diferencia en el empleo de un for o un .forEach

Para la versión declarativa me he visto obligado a emplear {} en el callback, perdiendo el return implícito de la función arrow y teniendo que introducir un return de forma explítica para finalizar la función.

## Ejercicio 2
Obtiene los string contenidos en un array delegando en el método correspondiente del objeto empleando un comparador extricto. Sólo añado un control del tipo del argumento proporcionado.

## Ejercicio 3
Compara las posiciones de dos puntos bidimensionales y entrega un objeto con las distancias absolutas de ambos ejes. En caso de que los objetos proporcionados no sean de la clase adecuada contesta con un error.

## Ejercicio 4
Compara un array con los array de una estructura arbitraria de array anidados. Entrega una lista de objetos que almacenan, para cada elemento en la estructura de arrays, la ruta relativa al array inicial de la estructura y un código clasificando diferentes tipos de equivalencia o diferencia con el array de referencia.

Los códigos de clasificación se almacenan asociados a un nemotécnico como una propiedad estática de la clase del objeto de las respuestas. Se emplean valores positivos para los códigos que indican equivalencia y negativos para los que indican desigualdad para facilitar filtrados por diferentes mecanismos.

## Puesta en marcha 
```bash 
node index.js
```