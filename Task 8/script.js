  const btn = document.querySelectorAll('.btn');
  const display = document.getElementById('display');
  let MemoryCurrentNumber = 0;
  let MemoryNewNumber = false;
  let MemoryPendingOperation = '';

  for (let i = 0; i < btn.length; i++) {
    let operationBtn = btn[i];
    operationBtn.addEventListener('click', function (e) {
      calc(e.target.textContent);
    });
  };

  function calc(btn) {
    btn = btn.trim();
    if (parseInt(btn) >= 0) {
      if (MemoryNewNumber) {
        display.value = btn;
        MemoryNewNumber = false;
      } else {
        if (display.value === '0') {
          display.value = parseInt(btn);
        } else {
          display.value += parseInt(btn);
        }
      }
    } else if (btn.indexOf('+') !== -1 || btn.indexOf('-') !== -1 || btn.indexOf('*') !== -1 || btn.indexOf('/') !== -1 || btn.indexOf('=') !== -1 || btn.indexOf('^') !== -1) {
      let localOperationMemory = display.value;
      if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
      } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
          MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
          MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
          MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
          MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '^') {
          MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, localOperationMemory);
        } else {
          MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        display.value = parseFloat(Math.floor(MemoryCurrentNumber * 100) / 100);
        MemoryPendingOperation = btn;
      }
    } else {
      if (btn === 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
      } else if (btn === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
      }
      if (btn === '.') {
        let localDecimalMemory = display.value;
        if (MemoryNewNumber) {
          localDecimalMemory = '0.';
          MemoryNewNumber = false;
        } else {
          if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
          }
        }
        display.value = localDecimalMemory;
      }
      if (btn === '√') {
        display.value = Math.sqrt(parseFloat(display.value));
      }
    }
  }