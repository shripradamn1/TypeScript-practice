// const up=1;
// const down=2;
// const left=3; instead of doing like this we can use enums 


enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Left)//3
console.log(Direction.Up)//1
