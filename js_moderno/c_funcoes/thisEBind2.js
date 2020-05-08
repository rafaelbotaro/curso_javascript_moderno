// usando a função bind
function Pessoa(){
    this.idade = 0;

    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000);
}
new Pessoa;

// usando a constante self que recebe o this
function Pessoa2(){
    this.idade = 0;
    const self = this;

    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }, 1000);
}
new Pessoa2;
