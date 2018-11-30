const input = document.getElementById('input');
const table = document.getElementById('table');

const result = (textContent, color='black') => {
  let tr = document.createElement('tr')
  let td = document.createElement('td');
  let content = document.createTextNode(textContent);
  td.appendChild(content);
  tr.appendChild(td);
  table.appendChild(tr);
  table.style.color = color; 
}

document.getElementById('btn').addEventListener('click', () => {
  table.textContent = '';
  let num = input.value;
  let regex = /[A-Za-z\.]/; // check if input contain alphabeth or a dot
  if (num <= 0  || regex.test(num)) { return result('Number field is empty or invalid', 'red'); }
  result(`Result for Pascal's Triangle of ${num}`)
  let pre = [1];
  result(pre) //outer 1

  for (let i = 2; i <= num; i++) {
    let current = [];

    current.push(1) //first
    for (let j = 0; j < pre.length - 1; j++) {
      current.push(pre[j] + pre[j + 1]); // middle'
    }
    current.push(1); //last
    result(current);
    pre = current;
  }
});

// clear input field
input.addEventListener('click', () => {
  return input.value = '';
});