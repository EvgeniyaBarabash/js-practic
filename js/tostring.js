// to string
let value = 0;
let toString = String(value);
console.log(`${value}, about constructor String`, toString);
console.log(typeof value);
console.log(typeof toString);

toString = value + "";
console.log(toString, typeof toString);
value = Infinity;
console.log(typeof Infinity);
console.log(`${value}`, toString);
 value= true;
 toString = String(value);
 console.log(`${value}`, typeof toString);
 console.log(typeof value);
 toString = value + "";
 console.log(`${value}, через конкатенацию: `, typeof toString);