#!/usr/bin/env node

const program = require('commander');

try {
  program.version('0.2.0')
    .command('publish-templates', 'Publish template files to a project')
    .command('create', 'Create a react component folder', { isDefault: true })
    .parse(process.argv);
} catch(error) {
  logger.error('Invalid command', error);
}
