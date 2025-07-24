import React from 'react';

const blocks = [
  { title: '🔔 Quando documento for processado', color: 'bg-cobalt' },
  { title: '📝 Gerar resumo', color: 'bg-electric' },
  { title: '📬 Enviar resposta automática', color: 'bg-cobalt' },
];

export default function AutomationFlow() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-electric">Exemplo de Fluxo</h3>
      <div className="flex flex-col space-y-4">
        {blocks.map((block, idx) => (
          <div
            key={idx}
            className={`text-black px-4 py-3 rounded font-medium ${block.color} shadow-md`}
          >
            {block.title}
          </div>
        ))}
      </div>

      <div className="mt-8 text-gray-400 italic">
        Arraste blocos e monte seus próprios fluxos de automação (funcionalidade em construção 👷‍♀️)
      </div>
    </div>
  );
}