

const result = document.getElementById("inputindex");

const calculate = number => {
  result.value += number;
  console.log(result.value);
};

const evaluateExpression = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Selected operation not allowed!");
  }
};

const clearInput = () => {
  result.value = "";
};

const deleteLastCharacter = () => {
  result.value = result.value.slice(0, -1);
};





















// let result = document.getElementById("inputindex");

// let calculate = (number)=> {
//     result.value += number;
//     console.log(result.value)
// }

// let Result=() => {
//     try{
//         result.value=eval(result.value)
//     }
//     catch(err){
//         alert("Selected operation not allowed!");
//     }
// }
// function clr() {
//     result.value = " ";
// }
// function del() {
//     result.value = result.value.slice(0, -1);
// };