import readline from 'node:readline';
import { routeQuestion } from './router-starter.js';

console.log('Router starter');
console.log('Type a question. Type exit to quit.');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on('line', function (line) {
  const question = line.trim();

  if (question.toLowerCase() === 'exit') {
    rl.close();
    return;
  }

  const result = routeQuestion(question);
  console.log('Topic: ' + result.topic);
  console.log('Response: ' + result.response);
  rl.prompt();
});
