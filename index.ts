import { Context, ScheduledEvent } from "aws-lambda";

module.exports.run = async (event: ScheduledEvent, context: Context) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
};
