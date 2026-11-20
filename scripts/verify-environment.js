/**
 * LandClarity Environment & Monorepo Health Verification Script
 * Checks node, npm, python, git, and directory workspace structure.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('='.repeat(70));
console.log('  LandClarity Environment & Monorepo Verification');
console.log('  Team: bruteforce | Lead: Kumar Adarsh');
console.log('='.repeat(70));
console.log();

let allPassed = true;

function checkTool(name, command) {
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
    console.log(`[PASS] ${name.padEnd(14)}: ${output.split('\n')[0]}`);
    return true;
  } catch {
    console.log(`[FAIL] ${name.padEnd(14)}: Not found or not in PATH`);
    return false;
  }
}

function checkDir(relPath) {
  const fullPath = path.join(process.cwd(), relPath);
  if (fs.existsSync(fullPath)) {
    console.log(`[PASS] Directory     : ${relPath}`);
    return true;
  } else {
    console.log(`[FAIL] Directory     : ${relPath} missing`);
    allPassed = false;
    return false;
  }
}

function checkFile(relPath) {
  const fullPath = path.join(process.cwd(), relPath);
  if (fs.existsSync(fullPath)) {
    console.log(`[PASS] File          : ${relPath}`);
    return true;
  } else {
    console.log(`[FAIL] File          : ${relPath} missing`);
    allPassed = false;
    return false;
  }
}

console.log('1. Checking Core Toolchain:');
const nodeOk = checkTool('Node.js', 'node -v');
const npmOk = checkTool('npm', 'npm -v');
const pyOk = checkTool('Python', 'python --version') || checkTool('py', 'py --version');
const gitOk = checkTool('Git', 'git --version');
const dockerOk = checkTool('Docker', 'docker --version');

if (!nodeOk || !npmOk) {
  allPassed = false;
}

console.log('\n2. Checking Monorepo Directory Layout:');
checkDir('apps/web');
checkDir('apps/api');
checkDir('apps/ai-service');
checkDir('packages/shared');
checkDir('infrastructure/docker');
checkDir('docs/architecture');
checkDir('scripts');

console.log('\n3. Checking Core Configuration Files:');
checkFile('package.json');
checkFile('tsconfig.base.json');
checkFile('.gitignore');
checkFile('.env.example');
checkFile('README.md');
checkFile('infrastructure/docker/docker-compose.yml');

console.log('\n' + '='.repeat(70));
if (allPassed) {
  console.log('STATUS: Monorepo foundation and core prerequisites are healthy!');
} else {
  console.log('STATUS: Some checks failed or optional tools (like Docker) need attention.');
}
console.log('='.repeat(70));

process.exit(allPassed ? 0 : 1);
