import React from 'react';

export default function SummaryPanel() {
  return (
    <section className="bg-gray-900 border border-gray-700 rounded p-6 mb-6">
      <h2 className="text-xl font-bold text-electric mb-4">Resumo gerado pela IA</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>📌 Introdução ao conteúdo</li>
        <li>📌 Pontos-chave destacados</li>
        <li>📌 Ações sugeridas com base no texto</li>
      </ul>
    </section>
  );
}