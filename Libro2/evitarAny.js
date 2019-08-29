//	para	poder	definir	tipos	utilizaremos	el	O	lógico
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("	") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join("	") + value;
    }
    //	Si	existiera	Any	tendriamos	que	controlar	la	excepción													//	Como	buenas	practicas	y	ya	que	este	código	al	fin	y	al	cabo													//	será	javascript	y	es	vulnerable	a	inyeción	siempre	está	bien													//	realizar	el	control	de	las	posibles	excepciones													throw	new	Error(`Expected	String	or	number,	got	'${padding}'	`);
}
console.log(padLeft("hello", "aaa")); //	Ejemplo	de	función	con	texto	->	Funciona				
console.log(padLeft("hello", 5)); //	Ejemplo	de	función	con	número	->	Funciona				
