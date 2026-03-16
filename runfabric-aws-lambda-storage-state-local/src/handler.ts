exports.handler = async(event: any, context: any) => {
  const records = event.Records || [];
  for (const r of records) {
    console.log('Object:', r.s3?.object?.key || r);
  }
  return { ok: true };
};
