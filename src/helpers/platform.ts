import { UAParser } from 'ua-parser-js';
let parser = new UAParser();
const OS = parser.getOS()

export default {
  OS
}