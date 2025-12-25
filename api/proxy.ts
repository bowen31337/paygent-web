export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    const url = new URL(req.url);
    const path = url.pathname;

    // Example proxy logic: if it's an API call, we could proxy it anywhere
    // For now, we'll just return a 200 with some info to prove it's an edge function
    if (path.startsWith('/api/')) {
        return new Response(JSON.stringify({
            message: 'Paygent Edge Proxy Active',
            path: path,
            timestamp: new Date().toISOString()
        }), {
            headers: { 'content-type': 'application/json' },
        });
    }

    // Fallback (though vercel.json handle most)
    return new Response('Not Found', { status: 404 });
}
