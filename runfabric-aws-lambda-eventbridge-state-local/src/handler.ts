exports.handler = async(event: any, context: any) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  return { ok: true };
};
