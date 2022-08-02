```js
let generalPurposeRegisters = {
  ax: 0,
  bx: 0,
  cx: 0,
  dx: 0,
  bp: 0,
  sp: 0,
  si: 0,
  di: 0,
}

let memory = []

const movInst = (source, destination) => {
  if (destination.toLowerCase() === 'ax') {
    generalPurposeRegisters.ax = source
  } else if (destination.toLowerCase() === 'bx') {
    generalPurposeRegisters.bx = source
  } else if (destination.toLowerCase() === 'bx') {
    generalPurposeRegisters.bx = source
  } else if (destination.toLowerCase() === 'cx') {
    generalPurposeRegisters.cx = source
  } else if (destination.toLowerCase() === 'dx') {
    generalPurposeRegisters.dx = source
  } else if (/([0-9][0-9][0-9][0-9][0-9])/.test(destination)) {
    const memoryPosition = Number(destination.slice(1, destination.length - 1))
    console.log(Number(destination.slice(1, destination.length - 1)))
    memory[memoryPosition] = source
  }
}

// Intrepreter
const interpreterForMov = (movInstruction) => {
  if (movInstruction.startsWith('mov')) {
    let segs = movInstruction.split(' ')
    const char = '"'
    if ((segs[2].includes(char))) {
    	segs[2] = convertASCIItoHex((JSON.parse(segs[2])))	  
    } else {
      segs[2] = Number((JSON.parse(segs[2])))	  
    }
    movInst(segs[2], segs[1].slice(0, segs[1].length-1))
  }
}

function convertASCIItoHex(asciiVal) {
    let asciiCode = asciiVal.charCodeAt(0)
    let hexValue = asciiCode.toString(16)
    return hexValue
}

// tests
interpreterForMov('mov [00233], "2"')
console.log(memory[233])
```
