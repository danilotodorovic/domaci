let pCount = document.querySelector('#clickMe');
let count = 0;

let btnOrder = document.querySelector('#order');

btnOrder.addEventListener('click', (e) => {
  count++
  pCount.innerHTML = "Narucite: " + count;
})

let btnYourOrder = document.querySelector('#app');
let pYourOreder = document.querySelector('#app1');

btnYourOrder.addEventListener('click', (e) => {
  if (count == 0) {
    app1.innerHTML = `Niste narucili`;
  } else {

    let time = new Date();
    app1.innerHTML = `Narucili ste ${count} pica <br> u 
     ${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()} 
     dana ${time.getDate()}. ${time.getMonth() + 1}. ${time.getFullYear()}.`;
  }
})
