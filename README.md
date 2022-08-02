# JS 8086 Intel Processor Assembly Emulator

## MOV destination, source
### Rugulations <br />
  - if source is a number we put it directly in the source(memory location or register with taking the size into consideration).
  - if source if a single quoted letter/number the emulator treats it as hex value.
  - if the source is a string we have two cases:
      - if we are storing the source in a register, then the string length must be equals to 2.
      - if we storing the source in memory, each caracter gets stored in a memory location in a consecutive manner.
