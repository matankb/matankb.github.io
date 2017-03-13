const types = (function () {

  function string({ key, value }) {
      let line = document.createElement('span');
      let keyElem = document.createElement('span');
      let valElem = document.createElement('span');
      keyElem.className = 'key';
      keyElem.innerHTML = key;
      valElem.innerHTML = value;
      line.className = 'line';
      line.appendChild(keyElem);
      line.appendChild(valElem);
      return line;
  }

  return { string };

})()

window.types = types;
