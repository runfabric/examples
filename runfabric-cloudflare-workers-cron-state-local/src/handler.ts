exports.handler = async(event: any, context: any) => {
  console.log('Cron triggered at', new Date().toISOString());
  return { ok: true };
};
