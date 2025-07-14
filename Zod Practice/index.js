import { email, z } from 'zod' ;

let mySchemaBodyValidated = z.object({
    email : z.email().length(30) ,
    password : z.string().min(8).max(100).refine((val) => /[a-z]/.test(val) ,{ message : "A lowercase charater is needed" }) ,
    status : z.boolean().default(false)
})

let a = {
    email : 'agrawalarpit456@gamil.com',
    password : 'godder'
}

let validationResult = mySchemaBodyValidated.safeParse(a) ;

console.log(validationResult);
