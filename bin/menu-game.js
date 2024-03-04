#!/usr/bin/env node
import readlineSync from 'readline-sync';
import SCM from '../src/scm.js';
import PROGRESSION from '../src/progression.js';

console.log('Choose the game!');
const menu = () => {
  const game = readlineSync.question('scm or progression? ');
  if (game === 'scm') {
    return SCM();
  }
  if (game === 'progression') {
    return PROGRESSION();
  }
  console.log('incorrect game');
  return menu();
};
menu();
