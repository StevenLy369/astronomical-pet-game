export class Alien {
  constructor(name) {
    this.name = name;
    this.health = 50; 
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
    }, 20000)
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
      this.age++;
      if(this.age > 25){
        this.alive
      }
    },90000)
  }


  increaseLife(){
    if(this.age < 5){
      return "Baby Alien";
    } else if(this.age >= 5 && this.age <= 9){
      return "Child Alien";
    } else if(this.age >= 10 && this.age <= 14){
      return "Teen Alien";
    } else if(this.age >= 15 && this.age <= 19){
      return "Adult Alien";
    } else if (this.age >= 20 && this.age <= 25){
      return "Senior Alien"
    } else
      return "Dead"
  };


  // Health Functionality
  addHealth(){
    this.health += num
    if(this.health >= 50){
      this.health = 50;
    }
  }

  decreaseHealth(){
    this.health -= num
    if(this.health <= 0){
      this.alive = false;
    }
  }

    healthButton() {
      this.health += 15
      if(this.health >= 50){
       this.healh = 50
      }
    }
    
  
  //Bathroom Functionality
  
  increaseBathroom(){
    setInterval(() => {
      this.bathroom++
      if(this.bathroom === 30){
        this.haveAccident();
      }
      
    }, 35000);
  }

  goBathroom(){
    this.bathroom = 0;
    this.happy += 15;
    this.addHealth(15);
  }

  haveAccident(){
   this.bathroom = 0;
   this.decreaseHealth(this.health / 4)

  }

    //Food Functionality 

      increaseHunger(){
        setInterval(() => {
          this.hungry --;
          if(this.hungry <= 15){
            this.decreaseHealth(15);
          } else if( this.hungry <= 5){
            this.decreaseHealth(40)
          } else if (this.hungry <= 0)
            this.health = 0;
            this.hungry = 0;
        }, 35000);
      }


    feedFood(){
      this.hungry += 8;
      if(this.hungry <= 0){
        this.hungry = 0;
      }
    }
  }


