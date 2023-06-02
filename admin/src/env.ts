export const env = {
    api:{
        host: process.env.REACT_APP_API_HOST || 'http://localhost',
        port: process.env.REACT_APP_API_PORT || 3003,
        endPoint: process.env.REACT_APP_API_END_POINT || '/api',

        get fullUrl(){
            return `${this.host}:${this.port}${this.endPoint}`
        }
    }
}