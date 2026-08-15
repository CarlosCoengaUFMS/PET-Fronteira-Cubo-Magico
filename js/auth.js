const SUPABASE_URL = 'https://udsmloettgcwdvbyliwc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__g8VB-GPMjJ8Y6Dj26dmdg_a03LMGFj';

function getSupabase() {
    if (window.supabaseClient) {
        return window.supabaseClient;
    }

    if (
        window.supabase &&
        typeof window.supabase.createClient === 'function'
    ) {
        window.supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_ANON_KEY
        );

        return window.supabaseClient;
    }

    console.error('Biblioteca do Supabase não foi carregada.');
    return null;
}

getSupabase();