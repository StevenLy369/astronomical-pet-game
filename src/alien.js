export class Alien {
  constructor(name) {
    this.name = name;
    this.health = 40; 
    this.age = 0;
    this.alive = true;
    this.bathroom = 0;
    this.happy = 25;
    this.hungry = 30;
  }

  // Happy Functionality
  decreaseHappy(){
    setInterval(() => {
      this.happy --;
      if(this.happy <= 0){
        this.happy = 0;
      }
    }, 10000);
  }

  increaseHappy(){
    this.happy += 5;
    if(this.happy >= 25){
      this.happy = 25;
    }
  }

  // Age Functionality
  increaseAge(){
    setInterval(() => {
      this.age ++;
      if(this.age > 25){
        this.alive = false;
      }
    }, 30000);
  }


  increaseLife(){
    if(this.age <= 4){
      return "Baby Alien";
    } else if(this.age >= 5 && this.age <= 9){
      return "Child Alien";
    } else if(this.age >= 10 && this.age <= 14){
      return "Teen Alien";
    } else if(this.age >= 15 && this.age <= 19){
      return "Adult Alien";
    } else if (this.age >= 20 && this.age <= 25){
      return "Senior Alien";
    } else
      return "Dead";
  }


  // Health Functionality
  addHealth(num){
    this.health += num;
    if(this.health >= 50){
      this.health = 50;
    }
  }

  decreaseHealth(num){
    this.health -= num;
    if(this.health <= 0){
      this.alive = false;
      this.health = 0;
    }
  }

  healthButton() {
    this.health += 15;
    if(this.health >= 50){
      this.health = 50;
    }
  }
    
  
  //Bathroom Functionality
  
  increaseBathroom(){
    setInterval(() => {
      this.bathroom += 1;
      if(this.bathroom == 15){
        this.haveAccident();
      }    
    }, 8000);
  }

  goBathroom(){
    this.bathroom = 0;
    this.happy += 15;
    this.addHealth(15);
    if(this.happy > 25){
      return this.happy = 25;
    }
  }

  haveAccident(){
    this.bathroom = 0;
    this.decreaseHealth(20);
  }

  //Food Functionality 

  increaseHunger(){
    setInterval(() => {
      this.hungry --;
      if(this.hungry <= 8 && this.hungry >= 4){
        this.decreaseHealth(15);
      } else if( this.hungry === 0){
        this.decreaseHealth(50);
      } else if(this.hunger < 0)
        this.hungry = 0;
    }, 9000);
  }

  feedFood(){
    this.hungry += 8;
    if(this.hungry <= 0){
      this.hungry = 0;
    } else if(this.hungry >= 30){
      this.hungry = 30;
    }
  }
}


