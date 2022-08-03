
const movInst = (source, destination, hexTwice) => {
  if ((
    destination === 'al' ||
    destination === 'bl' ||
    destination === 'cl' ||
    destination === 'dl' ||
    destination === 'ah' ||
    destination === 'bh' ||
    destination === 'ch' ||
    destination === 'dh')
      && (source > 0xFF)) {
    alert('Value out of bounds')
    return
  } 
  
  if ((
    destination === 'ax' ||
    destination === 'bx' ||
    destination === 'cx' ||
    destination === 'dx' ||
    destination === 'si' ||
    destination === 'di' ||
    destination === 'sp' ||
    destination === 'bp')
      && (source > 0xFFFF)) {
    alert('Value out of bounds')
    return
  }
  
  if (destination.toLowerCase() === 'ax') {
    if ((source <= 0xFFFF) || (Array.isArray(source))) {
        if (!hexTwice) {
          if (source > 255) {
            const hexVal = source.toString(16).split('')
            if (hexVal.length === 3) {
              generalPurposeRegisters.ax.al = Number(`0x${hexVal[1]}${hexVal[2]}`)
              generalPurposeRegisters.ax.ah = Number(`0x${hexVal[0]}`)
            } else if (hexVal.length === 4) {
              generalPurposeRegisters.ax.al = Number(`0x${hexVal[2]}${hexVal[3]}`)
              generalPurposeRegisters.ax.ah = Number(`0x${hexVal[0]}${hexVal[1]}`)
            }
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
            const hexVal = source.toString(16).split('')
            if (hexVal.length === 3) {
              generalPurposeRegisters.bx.bl = Number(`0x${hexVal[1]}${hexVal[2]}`)
              generalPurposeRegisters.bx.bh = Number(`0x${hexVal[0]}`)
            } else if (hexVal.length === 4) {
              generalPurposeRegisters.bx.bl = Number(`0x${hexVal[2]}${hexVal[3]}`)
              generalPurposeRegisters.bx.bh = Number(`0x${hexVal[0]}${hexVal[1]}`)
            }
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
            const hexVal = source.toString(16).split('')
            if (hexVal.length === 3) {
              generalPurposeRegisters.cx.cl = Number(`0x${hexVal[1]}${hexVal[2]}`)
              generalPurposeRegisters.cx.ch = Number(`0x${hexVal[0]}`)
            } else if (hexVal.length === 4) {
              generalPurposeRegisters.cx.cl = Number(`0x${hexVal[2]}${hexVal[3]}`)
              generalPurposeRegisters.cx.ch = Number(`0x${hexVal[0]}${hexVal[1]}`)
            }
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
            const hexVal = source.toString(16).split('')
            if (hexVal.length === 3) {
              generalPurposeRegisters.dx.dl = Number(`0x${hexVal[1]}${hexVal[2]}`)
              generalPurposeRegisters.dx.dh = Number(`0x${hexVal[0]}`)
            } else if (hexVal.length === 4) {
              generalPurposeRegisters.dx.dl = Number(`0x${hexVal[2]}${hexVal[3]}`)
              generalPurposeRegisters.dx.dh = Number(`0x${hexVal[0]}${hexVal[1]}`)
            }
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