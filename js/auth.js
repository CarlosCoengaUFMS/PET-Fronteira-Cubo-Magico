// js/auth.js
console.log('🔧 auth.js carregado!');

// Configuração do Supabase
const SUPABASE_URL = 'https://udsmloettgcwdvbyliwc.supabase.co';
const SUPABASE_KEY = 'sb_publishable__g8VB-GPMjJ8Y6Dj26dmdg_a03LMGFj';

// Cria o cliente Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Função para obter o cliente
function getSupabaseClient() {
    return supabaseClient;
}

// EXPORTA PARA O ESCOPO GLOBAL
window.getSupabaseClient = getSupabaseClient;
window.supabaseClient = supabaseClient;

console.log('✅ auth.js configurado!');
console.log('✅ getSupabaseClient disponível:', typeof window.getSupabaseClient);