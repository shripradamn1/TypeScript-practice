class Car{
    model!:string;
    year!:number;
    
    constructor(model:string,year:number);
    constructor(model:string);
    constructor(model?:string,year?:number){
      if(typeof model==='string' && typeof year ==='number'){
        this.model=model;
        this.year=year;
      }
      else if(typeof model=='string'){
        this.model=model;
      }
      else
      {
        console.log("invalide input")
      }
    }
  
    
  }
  const obj1=new Car("shri",2022);
  console.log(obj1.model, obj1.year);
  
export{}  