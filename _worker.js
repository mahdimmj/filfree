export default {
    async fetch(request, env) {
        try {
            const incomingPort = request.headers.get("port");     

            const url = new URL(request.url);
            url.hostname = env.HOST || 'ictfz.ir';
            url.protocol = 'https:';

            // Use the incoming port if available, otherwise default to env.PORT or 2096
            url.port = incomingPort || env.PORT || '443';

            // Forward the modified request
            const newRequest = new Request(url, {
                method: request.method,
                headers: request.headers,
                body: request.body,
                redirect: request.redirect,
                credentials: request.credentials,
            });

            return await fetch(newRequest);
        } catch (error) {
            return new Response(`Error: ${error.message}`, { status: 500 });
        }
    }
};


/*
export default {
    async fetch(request, env) {
                        const url = new URL(request.url);
                        url.hostname = env.HOST || 'ictfz.ir';
                        url.protocol = 'https:';
                        request = new Request(url, request);
                        return fetch(request);      
    }
};*/
