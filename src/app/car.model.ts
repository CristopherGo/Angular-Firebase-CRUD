export class Car{
 
    private brand:string;
    private model:string;
    private price:string;
    private type:string;
    private hp:string;
    private img:string[];

    constructor(brand:string, model:string, price:string, type:string, hp:string, img1:string, img2:string, img3:string){

        this.brand = brand;
        this.model = model;
        this.price = price;
        this.type = type;
        this.hp = hp;
        this.img = [img1, img2, img3];
    }


    getBrand(){
        return this.brand;
    }
    getModel(){
        return this.model;
    }
    getPrice(){
        return this.price;
    }
    getType(){
        return this.type;
    }
    getHp(){
        return this.hp;
    }
    getImg(i: number){
        return this.img[i];
    }
    

}