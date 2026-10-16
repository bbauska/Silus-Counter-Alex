/* ./js/scripts.js in silus-Counter-Alex for silus-counter-alex.bauska.org */
/* 
mm/dd/yyy count & running-total
*/
let counter = 0; /*  */
/* all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
