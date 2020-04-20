import { Alien } from '../src/alien.js';


describe('Alien', () => {
  let alien;
  jest.useFakeTimers();

  beforeEach(() => {
    alien = new Alien();
    // alien.health = 50; 
    // alien.age = 0;
    // alien.alive = true;
    // alien.bathroom = 0;
    alien.happy = 15;
    alien.hungry = 30;
  });


// Happy Test
  test('happiness should be 24 ', () => {
    alien.decreaseHappy();
    jest.advanceTimersByTime(20001);
    expect(alien.happy).toEqual(14);


  });
 
test('happiness should increase  by 5', () => {
  alien.increaseHappy();
  expect(alien.happy).toEqual(20);
})


//  Age Test
test('Age should increase every 55 seconds aswell as its age classifications', () => {
  jest.advanceTimersByTime(275001);
  expect(alien.increaseLife()).toEqual("Child Alien");
  expect(alien.age).toEqual(5)
 })
});
