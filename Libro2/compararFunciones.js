var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x; //	OK 
x = y; //	Error
var x2 = function () { return ({ name: 'Alice' }); };
var y2 = function () { return ({ name: 'Alice', location: 'Seattle' }); };
x2 = y2; //	OK 
y2 = x2; //	Error	porque	x()nmo	tiene	la	propiedad	location
