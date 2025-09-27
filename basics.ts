

function sum(x:number ,y:number){
    return x + y 
}

console.log('meow')

interface User { 
    username:string,
    age : number,
    email? : string,
}

const admin: User ={
    username:'dwojodwjmdwo',
    age : 34
    
}

function printUsername(user: User):void{
    console.log("USERNAME:",user.username)
    console.log("AGE:",user.age)
}

let age : number | string  = 23

age ='thirty'

async function ndwnwdi(): Promise<string> {
    return "SOME API DATA"
}