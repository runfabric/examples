exports.handler = async(event: any, context: any) => {
  const records = event.Records || event.records || [];
  for (const r of records) {
    console.log('Queue message:', r.body || r);
  }
  return { ok: true };
};
