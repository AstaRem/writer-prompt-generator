//arrays of options
let names = ['John', 'Sally', 'Nick', 'dog', 'Local gossip'];
let action = ['digging the soil', 'knitting', 'talking nonsense', 'asking for trouble', 'creating drama'];
let place = ['in the warehouse', 'in the woods', 'outside the town', 'in the secret spot', 'in the factory', 'on the farm'];

//generates new random sentence every time 
function newPrompt(){
let  randomName = names[Math.floor(Math.random() * names.length)];
let  randomAction = action[Math.floor(Math.random() * names.length)]; 
let  randomPlace = place[Math.floor(Math.random() * names.length)];

console.log(`${randomName} ${randomAction} ${randomPlace}.`);
}

newPrompt();
