let score: number | boolean | string = 34
score= true


type User = {
    name: string,
    id: number
}
type Admin = {
    username:string,
    id: number
}

let Surya: User | Admin = {
    name: "Suryansh SHukla",
    id: 12
}

const getID = (id: number | string) => {
    if(typeof id === "string"){
        id.toLowerCase()
    }
    
}