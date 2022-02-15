#!/usr/bin/env node

import getStdin from 'get-stdin';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { filterPath } from '../src/index.js';

const { entry, target } = yargs(hideBin(process.argv))
  .option('entry', {
    alias: 'e',
    type: 'string',
  })
  .option('target', {
    alias: 't',
    type: 'string',
  })
  .argv;

getStdin()
  .then((str) => {
    process.stdout.write(JSON.stringify(filterPath(JSON.parse(str), entry, target)));
  });
