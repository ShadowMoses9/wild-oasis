import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://funcbjghbwhdfgtvsgse.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1bmNiamdoYndoZGZndHZzZ3NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MDAwMTEsImV4cCI6MjAxMzM3NjAxMX0.Huy_Imcha_nRo5Uvtj7odCPzyzQvWKyLxtQ32Ll8GyA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
