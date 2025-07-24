import React from 'react';
import SidebarMenu from '../components/SlidebarMenu';
import DocumentUpload from '../components/DocumentUpload';

export default function Home() {
  return (
    <div className="flex bg-gray-950 min-h-screen text-white">
      <SidebarMenu />
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">OmniDesk AI</h1>
          <button className="bg-cobalt px-4 py-2 rounded">Modo Offline: Ativo</button>
        </header>
        <DocumentUpload />
        {/* Aqui entra a lista de documentos processados futuramente */}
      </main>
    </div>
  );
}