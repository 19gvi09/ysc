#! /usr/bin/env node
import Yargs from "yargs";
import utils from "./utils.js"

const yargs = Yargs(process.argv.slice(2))
const args = yargs
    .usage("Usage: ysc <path_to_file> [path_to_output_file]")
    .help(true)
    .alias({
        version: "v",
        help: "h",
    })
    .argv;

if(args._[0] == null) {
    yargs.showHelp();
} else {
    utils.compileFile(...args._)
}