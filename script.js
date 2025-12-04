 let turn = 'X';
 
    function toggleBox(el) {
      if (el.textContent) return;
      el.textContent = turn;
        if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
 
} 
// const a=document.querySelector(".p")
// const b=document.querySelector('.manibox1')
// function result(){
//     const cells = b.querySelectorAll('div');
//  if(cells[0,2].textContent==='X'){
//    a.innerHTML="win"
//   }else{
//    a.innerHTML="Ti"
//   }
// }
function result() {
  const rows = document.querySelectorAll('.manibox1')
  let win = false


 rows.forEach(row => {
    const cells = row.querySelectorAll('div')
    if (cells[0].textContent === cells[1].textContent &&
        cells[1].textContent === cells[2].textContent &&
        cells[0].textContent) {
      win = true
    }
  })

  // ⿢ columns
  for (let col = 0; col < 3 && !win; col++) {
    const c0 = rows[0].querySelectorAll('div')[col].textContent
    const c1 = rows[1].querySelectorAll('div')[col].textContent
    const c2 = rows[2].querySelectorAll('div')[col].textContent
    if (c0 === c1 && c1 === c2 && c0) win = true
  }

  // ⿣ diagonals
  const d0 = rows[0].querySelectorAll('div')[0].textContent
  const d1 = rows[1].querySelectorAll('div')[1].textContent
  const d2 = rows[2].querySelectorAll('div')[2].textContent
  if (d0 === d1 && d1 === d2 && d0) win = true

  const d3 = rows[0].querySelectorAll('div')[2].textContent
  const d4 = rows[1].querySelectorAll('div')[1].textContent
  const d5 = rows[2].querySelectorAll('div')[0].textContent
  if (d3 === d4 && d4 === d5 && d3) win = true

  document.querySelector('.p').innerHTML = win ? '🥳WIN🤩' : '😵TIE☹️'

}



function reset() {
    location.reload();   
}

    

