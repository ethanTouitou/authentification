import PocketBase from 'https://cdn.jsdelivr.net/npm/pocketbase@0.13.0/dist/pocketbase.es.js';

const PB_URL = "http://127.0.0.1:8090";

// Une seule instance PocketBase côté client
export const pb = new PocketBase(PB_URL);

// pb.authStore persiste tout seul dans localStorage
// donc l'utilisateur reste connecté même après refresh
