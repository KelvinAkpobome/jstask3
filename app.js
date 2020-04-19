function mytask(Number) {
    let bez = [];
    for(let i = 1; i <= Number; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            bez.push("yu-gi-oh");
        }
        
        
        else if (i % 2 === 0 && i % 3 === 0) {
            bez.push("yu-gi");
        }
        
        
        else if (i % 2 == 0 && i % 5 == 0) {
            bez.push("yu-oh");
        }
        
        
        else if (i % 3 === 0 && i % 5 === 0) {
            bez.push("gi-oh");
        }
        
        
        else if(i % 2 === 0) {
            bez.push("yu");
        }
        
        
        else if (i % 3 === 0) {
            bez.push("gi");
        }
        
        else if (i % 5 === 0) {
            bez.push("oh");
        }
        
        else {
            bez.push(i);
        }
    }
    console.log(bez);
}

mytask(100);


mytask(30);


mytask(10);