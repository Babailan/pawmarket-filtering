async function AtoZ(callback: (e: string) => Promise<unknown>) {
  let start = "a";

  while (start != "{") {
    if (start != "{") {
      await callback(start);
      let charCode = start.charCodeAt(0);
      charCode++;
      start = String.fromCharCode(charCode);
    } else {
      break;
    }
  }
}

export default AtoZ;
