import { Context, ScheduledEvent } from 'aws-lambda';

interface CronFunction {
   run: (event: ScheduledEvent, context: Context) => Promise<void>;
}

const cronFunction: CronFunction = {
   run: async (event: ScheduledEvent, context: Context) => {
      const time = new Date().toString();
      console.log(`Your cron function "${context.functionName}" ran at ${time}`);
      await Promise.resolve();
   },
};

module.exports = cronFunction;
