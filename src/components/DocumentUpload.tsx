import React from 'react';

export default function DocumentUpload() {
  return (
    <div className="border border-gray-700 p-4 rounded bg-gray-900">
      <h2 className="text-xl font-semibold mb-2">Upload de Documentos</h2>
      <input type="file" className="bg-gray-800 p-2 rounded w-full text-white" />
    </div>
  );
}