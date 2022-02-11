import minimist from "minimist";
import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';

const args = minimist(process.argv.slice(2));
args['number']
const number = args.number || 1

var output2 = coinFlips(number);
console.log(output2); 
var output3 = countFlips(output2);
console.log(output3);