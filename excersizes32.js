class Product{
    constructor(price, quantity, name){
        this.price = price
        this.quantity = quantity
        this.name = name
    }
    printAllAttrbutes(){
        alert(this.price)
        alert(this.quantity)
        alert(this.name)
    }
}
function main(){

    var go = new Product(100, 12, "gok");
    go.printAllAttrbutes()

}
main();