
const http = require('node:http');
const path = require('node:path');
const readline = require("node:readline/promises");
const fs = require('node:fs/promises');
const os = require('node:os');
const emitter = require('node:events');

const foo = async () => {
    //http
    //  const server = http.createServer((req, res) => {
    //         res.writeHead(200, { 'Content-Type': 'application/json' });
    //         res.end(JSON.stringify({
    //             data: 'Hello World!',
    //         }));
    //     });
    //
    //     server.listen(8000);
    //console.log(path.join(__dirname, 'helpers', 'helpers.js'));
    //const pathToHelper = path.join(__dirname, 'helpers', 'helper.js');

    //path
    //     console.log( path.basename(pathToHelper));
    //     console.log( path.dirname(pathToHelper));
    //     console.log( path.extname(pathToHelper));
    //     console.log( path.parse(pathToHelper));
    //     console.log( path.normalize('\Users\NKryv\IdeaProjects\node.js\helpers'));

    //readline
    //const rlInstance = readline.createInterface( {
    //         input: process.stdin,
    //         output: process.stdout
    //     })
    //     const name = await rlInstance.question(`What is your name?`);
    //     console.log(`Hello ${name}`);
    //     const age = await rlInstance.question(`How old are you?`);
    //     console.log(`Your are ${age} years old`);
    //     process.exit(0);

    //fs
    //await fs.writeFile( 'test.json', JSON.stringify([{name:'Nady', age:42 }, {name:'Maks', age:39 },{name:'Ale', age:43 }], null, 2));
    //     const data2 = await fs.readFile( path.join( process.cwd(), 'test.json' ), 'utf8' );
    //     console.log(JSON.parse(data2));
    //     await fs.rename('test.json', 'helpers/test2.json');
    //     await fs.writeFile( 'test.txt', 'Hello World!' );
    //     const data = await fs.readFile( path.join( process.cwd(), 'test.txt' ), 'utf8' );
    //     console.log(data);
    //await fs.appendFile( 'test.txt', '\rHello My World!' );
    //     await fs.appendFile( 'test.txt', '\rHello Wonderful World!' );
    //     await fs.appendFile( 'test.txt', '\rHello My Beautiful World!' );
    //     await fs.mkdir(path.join(process.cwd(),'sdf', 'qwe', 'asd'), { recursive: true });
    //     await fs.rmdir(path.join(process.cwd(),'sdf', 'qwe', 'asd'));
    //await fs.rm(path.join(process.cwd(),'sdf'), { recursive: true, force: true });

    //os
    //console.log(os.arch());
    //     console.log(os.cpus());
    //     console.log(os.freemem() /1824 / 1024 / 1024);
    //     console.log(os.totalmem() /1824 / 1024 / 1024);
    //     console.log(os.homedir());
    //     console.log(os.hostname());
    //     console.log(os.platform());
    //     console.log(os.release());
    //     console.log(os.tmpdir());
    //     console.log(os.uptime());
    //     console.log(os.userInfo());
    //     console.log(os.version());
    //     console.log(os.networkInterfaces());

    //events
    //const em = new emitter.EventEmitter();
    //em.on('first_visit', (www, eee) => {
    //         //send email
    //         console.log(`First visit [email] to ${www} ${eee}`);
    //     });
    //     em.on('first_visit', () => {
    //         //send sms
    //         console.log('First visit [sms]');
    //     });
    //     em.emit('first_visit', 'Nady', 42);
    //
    // em.once('second_visit', (www, eee) => {
    //         console.log(`Second visit `);
    //
    //     });
    //     em.emit('second_visit');



}
void foo();