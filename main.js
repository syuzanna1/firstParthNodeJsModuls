'use strict'
try{
    const foo = {};
    if(!foo.length){
        foo = {age:22};
    }
    console.log(foo);
} catch(err){
    if(err.message !="vuuyoyu"){
        console.log(err);
    }
}