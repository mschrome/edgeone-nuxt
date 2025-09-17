import ss from '../dist/_worker.js/index.js';
export function onRequest(context: { request: Request; env: Record<string, any> }) {
  const url = new URL(
    context.request.url,
    // @ts-expect-error
    context.request.headers['x-forwarded-proto'] +
      '://' +
      // @ts-expect-error
      context.request.headers['host']
  );

  // @ts-expect-error
  context.request.url = url.href;

  return ss.fetch(context.request, context.env);
}
