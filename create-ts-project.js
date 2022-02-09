const { spawn } = require('child_process')

function createCMD (cmd, dep) {
  return cmd.concat(dep.join(' '))
}

function execCMD (cmd) {
  const pwsh = spawn('pwsh.exe', ['-Command', cmd])

  pwsh.stdout.on('data', data => {
    console.log(`stdout: ${data}`)
  })

  pwsh.stderr.on('data', data => {
    console.log(`stderr: ${data}`)
  })

  pwsh.on('error', (error) => {
    console.log(`error: ${error.message}`)
  })

  pwsh.on('close', code => {
    console.log(`child process exited with code ${code}`)
  })
}

const dependencies = [
  'dotenv'
]

const devDependencies = [
  'rimraf',
  'prettier',
  'ts-loader',
  'ts-node-dev',
  'typescript',
  'eslint',
  'eslint-plugin-promise',
  'eslint-plugin-import',
  'eslint-plugin-node',
  '@typescript-eslint/eslint-plugin',
  'eslint-config-standard-with-typescript',
  'jest',
  '@types/jest',
  'ts-jest'
]

const cmdDevDependencies = createCMD('npm install --save-dev ', devDependencies)
const cmdDependencies = createCMD('npm install ', dependencies)

// console.log(cmdDevDependencies);
// console.log(cmdDependencies);

execCMD(cmdDependencies)
execCMD(cmdDevDependencies)
