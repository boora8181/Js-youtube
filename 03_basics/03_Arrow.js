const user = {
    username : "Aman",
    price : 999,

    welcomemessage : function(){
    console.log(` ${this.username}, welcome to the website`);
           console.log(this);
    }
}
user.welcomemessage()
user.username ="Boora"
user.welcomemessage()
console.log(this)