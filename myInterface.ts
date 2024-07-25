interface User {
    readonly dbID: number,
    email: string,
    userID: number,
    googleID?: number,
    startTrail(): string
}

const S: User = {dbID: 3, email: "h@h.com", userID: 4 , startTrail: () => {
    return "Hello there"
}}

