import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const validateUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

const createSupabaseClient = () => {
  if (!validateUrl(supabaseUrl) || !supabaseAnonKey) {
    return null;
  }
  try {
    return createClient(supabaseUrl!, supabaseAnonKey);
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
    return null;
  }
};

export const supabase = createSupabaseClient();
export const isSupabaseConfigured = !!supabase;
