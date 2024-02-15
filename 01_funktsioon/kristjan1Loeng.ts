function eurToThreeDollars(summa:number) {
  console.log(summa + " EUR");
  let cad:number = summa*0.69;
  let aus:number = summa*1.66;
  let usa:number = summa*1.08;

  return ["CAD: " + cad.toFixed(2),"AUS: " + aus.toFixed(2),"USA " + usa.toFixed(2)];
}

console.log(eurToThreeDollars(30));