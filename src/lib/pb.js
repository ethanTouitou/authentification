import PocketBase from "pocketbase";

const PB_URL = "http://127.0.0.1:8090";

// Une seule instance PocketBase côté client
export const pb = new PocketBase(PB_URL);

// pb.authStore persiste tout seul dans localStorage
// donc l'utilisateur reste connecté même après refresh
