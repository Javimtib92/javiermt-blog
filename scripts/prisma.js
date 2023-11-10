const { execSync } = require('child_process');

var args = process.argv.slice(2);

const command = `npx prisma ${args.join(' ')}`;

execSync(command, {
  encoding: 'utf8',
  stdio: 'inherit',
});
