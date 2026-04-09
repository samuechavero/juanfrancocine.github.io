import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bliydtpehtrxsasmblyh.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let _client: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (!SUPABASE_ANON_KEY) return null;
  if (!_client) {
    _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _client;
}

export async function saveLead(nombre: string, telefono: string): Promise<void> {
  const client = getClient();
  if (!client) return;
  try {
    await client.from("leads").insert([{ nombre, telefono }]);
  } catch {
  }
}
