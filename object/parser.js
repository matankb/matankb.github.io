let format = [
  { key: 'name: ', value: '<span class="string">Yo!</span>,', type: types.string }
]

function display(lines) {
  let node = document.createElement('DIV');
  let root = document.body.getElementsByClassName('code')[0];
  lines.forEach(line => {
    node.appendChild(createLine(line));
  })
  root.appendChild(node);
}

function createLine(line) {
  console.log(line.type(line));
}

function string(key, val) {
  let valElem = document.createElement('span');
}

display(format);
