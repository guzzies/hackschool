var alda = {
  name: 'Joona',
  alter: 14,
  schuhgroesse: 42,
  ausgeben: function(){
    console.log(this.name)
  }
};


console.log(alda.alter);
alda.alter = 17;
console.log(alda.alter);
