import { createClient } from '@supabase/supabase-js';
import type { ClockConfig } from '../types';

const url = import.meta.env.VITE_SUPABASE_URL ?? '';
const key = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const SUPABASE_CONFIGURED = !!(url && key);

export const supabase = SUPABASE_CONFIGURED
  ? createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null;

export async function loadConfigFromSlug(slug: string): Promise<Partial<ClockConfig> | null> {
  if (!supabase) return null;
  const { data } = await supabase
    .from('links')
    .select('config')
    .eq('slug', slug)
    .maybeSingle();
  return (data?.config as Partial<ClockConfig>) ?? null;
}

export async function uploadLogo(file: File): Promise<string> {
  if (!supabase) throw new Error('Supabase not configured');
  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'png';
  const name = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabase.storage.from('logos').upload(name, file, {
    cacheControl: '31536000',
    upsert: false,
  });
  if (error) throw new Error(error.message);
  const { data } = supabase.storage.from('logos').getPublicUrl(name);
  return data.publicUrl;
}
