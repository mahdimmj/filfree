export default {
    async fetch(request, env) {
        try {
            const url = new URL(request.url);
            
            // Update hostname and port
            url.hostname = env.HOST || 'ictfz.ir';
            url.port = env.PORT || '2096'; // Specify the desired port
            
            // Ensure HTTPS protocol
            url.protocol = 'https:';
            
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
