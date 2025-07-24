import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Documentos', path: '/' },
  { label: 'Automação', path: '/automation' },
  { label: 'Histórico', path: '/history' },
  { label: 'Configurações', path: '/settings' },
];

export default function SidebarMenu() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 h-screen p-6">
      <h1 className="text-2xl font-bold mb-10 text-electric">OmniDesk</h1>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded transition ${
              location.pathname === item.path
                ? 'bg-electric text-black font-semibold'
                : 'text-white hover:bg-gray-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}