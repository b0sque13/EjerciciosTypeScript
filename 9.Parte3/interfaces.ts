interface Lakes 
{    
    name: string,    
    area: number,    
    length: number,    
    depth: number,    
    isFreshwater: boolean,    
    countries: string[],    
    frozen?: string[] 
}
 
let secondLake: Lakes = 
{    
    name: 'Superior',    
    depth: 406.3,    
    length: 616,   
    area: 82100,    
    isFreshwater: true,    
    countries: ['Canada', 'United States'] 
}
 
let thirdLake: Lakes = 
{    
    name: 'Baikal',    
    depth: 1637,    
    length: 636,    
    area: 31500,    
    isFreshwater: true,    
    countries: ['Russia'],    
    frozen: ['January', 'February', 'March', 'April', 'May'] 
}