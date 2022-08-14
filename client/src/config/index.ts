// should be your LAN rather than docker-container name.
// axios(running in browser) is not in the docker network.
export const API_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';
