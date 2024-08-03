// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name

//     }
// }
class User {
  protected _courseCount = 1;

  readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}
  private deleteToken() {
    console.log("Token deleted");
  }
}

//  Protected in typescript
class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const hitesh = new User("h@h.com", "hitesh");
// hitesh.name

// hitesh.deleteToken()
