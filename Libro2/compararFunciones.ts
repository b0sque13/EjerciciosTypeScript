let	x	=	(a:	number)	=>	0; 
let	y	=	(b:	number,	s:	string)	=>	0;
y	=	x;	//	OK 
x	=	y;	//	Error



let	x2	=	()	=>	({name:	'Alice'}); 
let	y2	=	()	=>	({name:	'Alice',	location:	'Seattle'});
x2	=	y2;	//	OK 
y2	=	x2;	//	Error	porque	x()nmo	tiene	la	propiedad	location
