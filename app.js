let input = document.getElementById('input');
let table = document.getElementById('table');

function createNode(textContent, color='black') {
  let tr = document.createElement('tr')
  let td = document.createElement('td');
  let content = document.createTextNode(textContent);
  td.appendChild(content);
  tr.appendChild(td);
  table.appendChild(tr);
  table.style.color = color; 
}

document.getElementById('btn').addEventListener('click', function() {
  table.textContent = '';
  let num = input.value;
  if (num <= 0 || num === '') {return createNode('Number must be greater than 0', 'red')}

  let pre = [1];
  createNode(pre) //outer 1

  for (let i = 2; i <= num; i++) {
    let current = [];

    current.push(1) //first
    for (let j = 0; j < pre.length - 1; j++) {
      current.push(pre[j] + pre[j + 1]); //middle
    }
    current.push(1); //last
    createNode(current);
    pre = current;
  }
});

// clear input field
input.addEventListener('click', function() {
  return input.value = '';
})


