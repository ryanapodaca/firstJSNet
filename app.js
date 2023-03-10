const { brain } = require('brain.js');
const GPU = require('gpu.js');
//console.log(GPU.VERSION);


// Define a neural network with 2 input neurons, 2 hidden neurons, and 1 output neuron
const net = new brain.NeuralNetwork({ 
  inputSize: 2,
  hiddenLayers: [2],
  outputSize: 1
});

// Train the neural network on some input/output pairs
net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

// Use the trained neural network to make a prediction on a new input
const output = net.run([0, 1]); // Should output [1]

console.log(output);

let display = document.getelementById('display');
display.textContent = output;




// const brain = require('brain.js');
// //import * as brain from 'brain.js';
// import { data} from '../../../..;
// import { shuffle} from './shuffle';

// //split data

// const split = 99;
// const trainData = Data.slice(0,split);
// const testData = Data.slice(split + 1);


// const config = {
//   inputSize: 20,
//   inputRange: 20,
//   outputSize: 20,
//   decayRate: 0.999
// }

// const net = new brain.recurrent.RNN(config);

// const bNet = new brain.NeuralNetwork({
//   activation: 'sigmoid',
//   hiddenLayers: [4, 5, 7], //each number specifies a layer of n neurons
//   iterations: 20000,
//   learningRate: 0.5
// });

// bNet.train(trainData);

