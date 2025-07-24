import SlidebarMenu from '../components/SlidebarMenu';
export default function DocumentView() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white font-sans">
      <SlidebarMenu />

      <main className="flex-1 px-6 py-8 space-y-6">
        <h1 className="text-3xl font-bold text-electric">Resumo e Ações Inteligentes 🤖</h1>

        {/* Painel de Resumo */}
        <section className="bg-gray-900 border border-gray-700 rounded p-6 mb-6 sm:p-4">
          <h2 className="text-xl font-bold text-electric mb-4 sm:text-lg">Resumo gerado pela IA</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-xs">
            <li>📌 Introdução ao conteúdo</li>
            <li>📌 Pontos-chave destacados</li>
            <li>📌 Ações sugeridas com base no texto</li>
          </ul>
        </section>

        {/* Painel de Ações Inteligentes */}
        <section className="bg-gray-900 border border-gray-700 rounded p-6 mb-6 sm:p-4">
          <h2 className="text-xl font-bold text-electric mb-4 sm:text-lg">Ações Inteligentes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-cobalt hover:bg-electric text-black font-semibold px-4 py-2 rounded transition w-full text-sm">📨 Responder por e-mail</button>
            <button className="bg-cobalt hover:bg-electric text-black font-semibold px-4 py-2 rounded transition w-full text-sm">📝 Criar tarefa</button>
            <button className="bg-cobalt hover:bg-electric text-black font-semibold px-4 py-2 rounded transition w-full text-sm">📁 Mover para pasta X</button>
            <button className="bg-cobalt hover:bg-electric text-black font-semibold px-4 py-2 rounded transition w-full text-sm">🔍 Buscar documento relacionado</button>
          </div>
        </section>

        {/* Campo de input para a IA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-electric hover:bg-cobalt text-black font-semibold px-4 py-2 rounded transition w-full sm:w-auto">
            Refinar Resumo
          </button>
          <input
            type="text"
            placeholder="Me explique isso…"
            className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded w-full"
          />
        </div>
      </main>
    </div>
  );
}