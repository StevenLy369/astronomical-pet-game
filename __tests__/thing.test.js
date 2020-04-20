import { Alien } from '../src/alien.js';


describe('Alien', () => {
  let alien;
  jest.useFakeTimers();

  beforeEach(() => {
    alien = new Alien();
    alien.health = 35; 
    alien.happy = 15;
    alien.hungry = 20;
  });


// Happy Test
  test('happiness should be 24 ', () => {
    alien.decreaseHappy();
    jest.advanceTimersByTime(10001);
    expect(alien.happy).toEqual(14);


  });
 
test('happiness should increase  by 5', () => {
  alien.increaseHappy();
  expect(alien.happy).toEqual(20);
})


//  Age Test
test('Age should increase every 55 seconds aswell as its age classifications', () => {
  alien.increaseAge();
  jest.advanceTimersByTime(150001);
  expect(alien.increaseLife()).toEqual("Child Alien");
  expect(alien.age).toEqual(5)
  })

  // Health Test
  test('Health should decrease by a given number when called on and determine whether your pet alien is alive or dead', () => {
    alien.decreaseHealth(50)
    expect(alien.alive).toEqual(false)
  })
  
test('Health should increase by num when called', () => {
  alien.addHealth(15);
  expect(alien.health).toEqual(50);
})

test('Health should increase by 15 when called' , () => {
  alien.addHealth(15);
  expect(alien.health).toEqual(50);
})

// Bathroom Test
test('Should increase bathroom level by 1 every 35 seconds', () => {
   alien.increaseBathroom();
   jest.advanceTimersByTime(8001);
   expect(alien.bathroom).toEqual(1);
})

test('should reset your bathroom level on having an accident.', () => {
  alien.bathroom = 30;
  alien.increaseBathroom();
  alien.haveAccident();
  expect(alien.bathroom).toEqual(0);
})

test('should decrease your health on an accident.', () => {
  alien.bathroom = 30;
  alien.increaseBathroom();
  alien.haveAccident();
  expect(alien.health).toEqual(15)
})


test('Should set bathroom to 0 and increase happy by 15 as well as add health' , () => {
  alien.goBathroom();
  expect(alien.bathroom).toEqual(0);
  expect(alien.happy).toEqual(30);
  expect(alien.health).toEqual(50);
})




// Food Functionality
test('When function is called: hunger decreases by 1 every 35 seconds', () => {
  alien.increaseHunger();
  jest.advanceTimersByTime(9001);
  expect(alien.hungry).toEqual(19);
})

test('should increase hunger by 8 when called.', () => {
  alien.feedFood();
  expect(alien.hungry).toEqual(28);


})
});
