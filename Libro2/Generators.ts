function* infiniteSequence() {
    var i = 0;
    while (true) {
        yield i++;
    }
}

var iterator1 = infiniteSequence();
while (true) {
    console.log(iterator1.next());	//	{	value:	xxxx,	done:	false	}	para	siempre 
}



function*	generator(){				
    console.log('Execution	started');				
    yield	0;				
    console.log('Execution	resumed');				
    yield	1;				
    console.log('Execution	resumed'); 
}
var	iterator	=	generator(); 
console.log('Starting	iteration');	//	Esto	se	ejecutará	antes	que	nada	de	dentro	del	m étodo	generator() 
console.log(iterator.next());	//	{	value:	0,	done:	false	} 
console.log(iterator.next());	//	{	value:	1,	done:	false	} 
console.log(iterator.next());	//	{	value:	undefined,	done:	true	}