const fs = require('fs');
<<<<<<< HEAD

const createBigFile = (iterations) => {
    for(let i=0; i<= iterations; i++) {
        fs.appendFileSync("./LoremIpsum.txt",`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.\n`);
    }
};

createBigFile(process.argv[2]);
=======
const file = fs.createWriteStream('./LoremIpsum.txt');

const createBigFile = (iterations) => {
    for(let i=0; i<= iterations; i++) {
        file.write(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.\n`);
    }
    file.end();
};

createBigFile(process.argv[2]);
>>>>>>> 419b88844401fee47b36a755fb0f80eb2b5eec4b
