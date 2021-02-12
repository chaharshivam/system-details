#!/usr/bin/env node

const operating_system = require('./os_details');
const numCPU = require('./cpu_details').number_of_cpus;
const detailCPU = require('./cpu_details').details_of_cpus;
const chalk = require('chalk');
console.log("\n"+chalk.cyan.underline.bold("Operating System Details :"));
console.table(operating_system);
console.log("\n"+chalk.cyan.underline.bold("CPUs Details :"));
console.table(numCPU);
console.table(detailCPU);
console.log("\n"+chalk.cyan.underline.bold("Network Speed :")+" (will take 1-2 minutes to calculate)");
require('./network_speed');





