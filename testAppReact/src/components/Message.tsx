// let count = 0;
// const Message = () => {
//     count++;
//console.log("Message called: ", count);
//   return (
//    <div>Message {count}</div>
//   )
// }

// export default Message

//INPURE COMPONENT


const Message = () => {
  let count = 0;  
    count++;
    console.log("Message called: ", count);
  return (
   <div>Message {count}</div>
  )
}
export default Message

// PURE COMPONENT

// jest to spowodowane STRICT MODE w pliku main.tsx który renteruje dwóktotnie aplikacje 
// pierwszy wynik jest do wyłapamnia możliwych błędów, a drugi jest juz wynikiem pokazywanym w przeglądarce
// jest to uzywane na dev a na kodzie produkcyjnym nie jest on uzywany i renerowane jest tylko raz