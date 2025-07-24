import React from 'react';

export default function SmartActions() {
  const actions = [
    { emoji: '📨', label: 'Responder por e-mail' },
    { emoji: '📝', label: 'Criar tarefa' },
    { emoji: '📁', label: 'Mover para pasta X' },
    { emoji: '🔍', label: 'Buscar documento relacionado' },
  ];

  return (
    <section className="bg-gray-900 border border-gray-700 rounded p-6 mb-6">
      <h2 className="text-xl font-bold text-electric mb-4">Ações Inteligentes</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.label}
            className="bg-cobalt hover:bg-electric text-black font-semibold px-4 py-2 rounded transition"
          >
            {action.emoji} {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}