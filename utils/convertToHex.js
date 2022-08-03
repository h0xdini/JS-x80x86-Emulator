function convertASCIItoHex(asciiVal) {
    let asciiCode = asciiVal.charCodeAt(0)
    let hexValue = asciiCode.toString(16)
    return hexValue
}