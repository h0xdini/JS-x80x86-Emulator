// Two-argument instructions
const instructionThriceSplit = (movInstruction) => {
    let twice = false
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
    } else if ((segs[2].includes('0x'))) {
    	segs[2] = (Number(segs[2])) 
    } else if (/^[0-1]*$/.test(segs[2])) {
    	segs[2] = (parseInt(segs[2], 2)) 
    } else {
      segs[2] = Number((JSON.parse(segs[2])))	  
    }
  
    movInst(segs[2], segs[1].slice(0, segs[1].length-1), twice)
}
