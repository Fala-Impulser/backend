const { configure, getLogger } = require('log4js');

const props = {
  level: process.env.LOG_LEVEL || 'INFO',
  daysToKeep: process.env.LOG_DAYS || 15,
  path: process.env.LOG_PATH || 'logs/'
};

configure({
  appenders: {
    errorLevel: {
      type: 'dateFile',
      daysToKeep: props.daysToKeep,
      keepFileExt: true,
      filename: props.path + 'error.log',
      alwaysIncludePattern: true
    },
    allLevel: {
      type: 'dateFile',
      daysToKeep: props.daysToKeep,
      keepFileExt: true,
      filename: props.path + 'log.log',
      alwaysIncludePattern: true,
      level: props.level
    },
    stderr: {
      type: 'logLevelFilter',
      appender: 'errorLevel',
      level: 'error'
    },
    stdout: {
      type: 'stdout',
      layout: {
        type: 'colored'
      },
      level: props.level
    }
  },
  categories: {
    default: {
      appenders: ['stdout', 'stderr', 'allLevel'],
      level: props.level
    }
  }
});

module.exports = getLogger('backend');
