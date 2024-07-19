import { isAdult } from './type_script_example';
import { User } from './type_script_example';

const justine: User = {
  name: 'Justine',
  age: 23,
};

const isJustineAnAdult: boolean = isAdult( justine );

console.log(`Is ${justine.name} an adult: ${isJustineAnAdult}`);