import { hammer, screwdriver } from './tools.js'
hammer()

import toolbox from './tools.js'
toolbox()

import toolbox, { hammer} from './tools.js'
hammer()
toolbox()

import { hammer as suttika } from './tools.js'
suttika()

import * as Tools  from './tools.js'
// Tools.hammer()

Tools.screwdriver()