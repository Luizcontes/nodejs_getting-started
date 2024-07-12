type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
};

const justine: User = {
  name: 'Justine',
  age: 23,
};

const isJustineAnAdult: boolean = isAdult( {name: "justine", age: 11} );

console.log(`Is justine an adult: ${isJustineAnAdult}`);