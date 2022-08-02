let generalPurposeRegisters = {
  ax: {
  	ah: 0,
	al: 0,
  },
  bx: {
  	bh: 0,
	bl: 0,
  },
  cx: {
  	ch: 0,
	cl: 0,
  },
  dx: {
  	dh: 0,
	dl: 0,
  },
  bp: 0,
  sp: 0,
  si: 0,
  di: 0,
}

let memory = []

const movInst = (source, destination, hexTwice) => {
  if (destination.toLowerCase() === 'ax') {
    if ((source <= 0xFFFF) || (Array.isArray(source))) {
        if (!hexTwice) {
          if (source > 255) {
            generalPurposeRegisters.ax.al = 255
            generalPurposeRegisters.ax.ah = source - 255
          } else {
            generalPurposeRegisters.ax.al = source
          }
        } else {
          if ((source[0] <= 255) && (source[1] <= 255)) {
            generalPurposeRegisters.ax.al = source[1]
            generalPurposeRegisters.ax.ah = source[0]
          } else {
            alert("Value out of bounds")
          }
        }
    } else {
      alert("Value out of bounds")
    }
  } else if (destination.toLowerCase() === 'bx') {
    if ((source <= 0xFFFF) || (Array.isArray(source))) {
        if (!hexTwice) {
          if (source > 255) {
            generalPurposeRegisters.bx.bl = 255
            generalPurposeRegisters.bx.bh = source - 255
          } else {
            generalPurposeRegisters.bx.bl = source
          }
        } else {
          if ((source[0] <= 255) && (source[1] <= 255)) {
            generalPurposeRegisters.bx.bl = source[1]
            generalPurposeRegisters.bx.bh = source[0]
          } else {
            alert("Value out of bounds")
          }
        }
    } else {
      alert("Value out of bounds")
    }
  } else if (destination.toLowerCase() === 'cx') {
    if ((source <= 0xFFFF) || (Array.isArray(source))) {
        if (!hexTwice) {
          if (source > 255) {
            generalPurposeRegisters.cx.cl = 255
            generalPurposeRegisters.cx.ch = source - 255
          } else {
            generalPurposeRegisters.cx.cl = source
          }
        } else {
          if ((source[0] <= 255) && (source[1] <= 255)) {
            generalPurposeRegisters.cx.cl = source[1]
            generalPurposeRegisters.cx.ch = source[0]
          } else {
            alert("Value out of bounds")
          }
        }
    } else {
      alert("Value out of bounds")
    }
  } else if (destination.toLowerCase() === 'dx') {
    if ((source <= 0xFFFF) || (Array.isArray(source))) {
        if (!hexTwice) {
          if (source > 255) {
            generalPurposeRegisters.dx.dl = 255
            generalPurposeRegisters.dx.dh = source - 255
          } else {
            generalPurposeRegisters.dx.dl = source
          }
        } else {
          if ((source[0] <= 255) && (source[1] <= 255)) {
            generalPurposeRegisters.dx.dl = source[1]
            generalPurposeRegisters.dx.dh = source[0]
          } else {
            alert("Value out of bounds")
          }
        }
    } else {
      alert("Value out of bounds")
    }
  } else if (destination.toLowerCase() === 'si') {
    if (source <= 0xFFFF) {
      generalPurposeRegisters.si = source
    } else {
      alert("Value out of bounds")
    }
  } else if (destination.toLowerCase() === 'di') {
    if (source <= 0xFFFF) {
      generalPurposeRegisters.di = source
    } else {
      alert("Value out of bounds")
    }
  } else if (destination.toLowerCase() === 'sp') {
    if (source <= 0xFFFF) {
      generalPurposeRegisters.sp = source
    } else {
      alert("Value out of bounds")
    }
  } else if (destination.toLowerCase() === 'bp') {
    if (source <= 0xFFFF) {
      generalPurposeRegisters.bp = source
    } else {
      alert("Value out of bounds")
    }
  } else if (/([0-9][0-9][0-9][0-9][0-9])/.test(destination)) {
    const memoryPosition = Number(destination.slice(1, destination.length - 1))
    if (source <= 0xFFFF) {
      memory[memoryPosition] = source
    } else {
      alert("Value out of bounds")
    }
  }
}

// Intrepreter
const instructionThriceSplit = (movInstruction) => {
  let twice = false
  if (movInstruction.startsWith('mov')) {
    let segs = movInstruction.split(' ')
    const char = '"'
    if ((segs[2].includes(char)) && (segs[2].length === 3)) {
    	segs[2] = Number(`0x${convertASCIItoHex((JSON.parse(segs[2])))}`)
    } else if ((segs[2].includes(char)) && (segs[2].length === 4)) {
    	segs[2] = [
          Number(`0x${convertASCIItoHex((segs[2][1]))}`),
          Number(`0x${convertASCIItoHex((segs[2][2]))}`)
        ]	
        twice = true
    } else if ((segs[2].includes(char)) && (segs[2].length > 3)) {
    	segs[2] = (JSON.parse(segs[2]))  
    } else {
      segs[2] = Number((JSON.parse(segs[2])))	  
    }
    movInst(segs[2], segs[1].slice(0, segs[1].length-1), twice)
  }
}

function convertASCIItoHex(asciiVal) {
    let asciiCode = asciiVal.charCodeAt(0)
    let hexValue = asciiCode.toString(16)
    return hexValue
}

// tests
<<<<<<< HEAD
instructionThriceSplit('mov di, 250')
console.log(generalPurposeRegisters.di)
=======
instructionThriceSplit('mov ax, "AB"')
console.log(generalPurposeRegisters.ax)
>>>>>>> 81d17fce1ebb958d1175ebd116eb09d3ba8b25a4
