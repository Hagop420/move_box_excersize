const sectionMain = document.querySelector('.flexer_section')
const mainSquare = document.querySelector('.square');

function getRandomClr() {
    // random color for the square
    
   

   // smoothly trans clr
   mainSquare.style.position = 'relative'
   mainSquare.style.transition = 'transform 1.5s ease-in-out, background-color 1.5s ease-in-out';

   
    // random object
    const randomClrOne = Math.ceil(Math.random() * 234)
    const randomClrTwo = Math.ceil(Math.random() * 210)
   const randomClrThree = Math.ceil(Math.random() * 198)
   mainSquare.style.backgroundColor = `rgb(${randomClrOne}, ${randomClrTwo}, ${randomClrThree})`
   
   return `rgb(${randomClrOne}, ${randomClrTwo}, ${randomClrThree})`;


}




 






function changeSquarePositionPlus() {
   mainSquare.style.position = 'relative'
   mainSquare.style.transform = 'translateX(360px)'
   mainSquare.style.transition = 'transform 1.5s ease-in-out';
}

function changeSquarePositionMinus() {
   
   mainSquare.style.position = 'relative'
      mainSquare.style.transform = 'translateX(-360px)'
      mainSquare.style.transition = 'transform 1.5s ease-in-out';
  
}










mainSquare.addEventListener('click', (e) => {

   let color = window.getComputedStyle(mainSquare).backgroundColor
   if (color === 'rgb(0, 0, 0)') {
      changeSquarePositionPlus()
      getRandomClr()
      return;
   }
   
   
   // color random
   let randomColor = getRandomClr();

   color  = window.getComputedStyle(mainSquare).backgroundColor

   console.log(randomColor);

  console.log(mainSquare.style.backgroundColor);
   

   if (mainSquare.style.backgroundColor === randomColor) {
      setTimeout(() => {
         // mainSquare.style.backgroundColor = randomColor;
         changeSquarePositionMinus()
         getRandomClr()
      }, 100);

   }
   setTimeout(() => {
      mainSquare.style.backgroundColor = 'rgb(0, 0, 0)';
   }, 100);







});

  

   






