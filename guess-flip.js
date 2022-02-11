import minimist from "minimist";
import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';

const args = minimist(process.argv.slice(2));
args['call']
const call = args.call
if (call == undefined) {
    console.error("Error: no input");
    console.error("Usage: node guess-flip --call=[heads|tails]");
    process.exit(1)
}
if (call == "heads") {
    var output4 = flipACoin(call);
    console.log(output4);
}
if (call == "tails") {
    var output4 = flipACoin(call);
    console.log(output4);
}

console.error("Error: no input");
console.error("Usage: node guess-flip --call=[heads|tails]");
process.exit(1)
