import './styles/globals.css';
import { useState } from 'react';

export default function App() {
  const [modoOffline, setModoOffline] = useState(false);
  const [documentos, setDocumentos] = useState([
    { nome: "contrato1.pdf", data: "23/07/2025", status: "✅ Pronto" },
    { nome: "resumo.docx", data: "22/07/2025", status: "❌ Erro" },
    { nome: "notas.txt", data: "21/07/2025", status: "🔄 Processando" },
  ]);

  const toggleModoOffline = () => setModoOffline(!modoOffline);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Arquivo enviado:", file.name);
      // Aqui você pode adicionar lógica de upload e processamento
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>📁 OmniDesk</h1>
        <button onClick={toggleModoOffline} className="offline-button">
          Modo Offline: {modoOffline ? "Ativado ✅" : "Desativado ❌"}
        </button>
      </header>

      {/* Menu Lateral */}
      <aside className="sidebar">
        <nav>
          <ul>
            <li className="active">📄 Documentos</li>
            <li>⚙️ Automação</li>
            <li>📜 Histórico</li>
            <li>🔧 Configurações</li>
          </ul>
        </nav>
      </aside>

      {/* Área principal */}
      <main className="main-content">
        {/* Upload */}
        <section className="upload-area">
          <label htmlFor="file-upload" className="upload-label">
            Arraste ou clique para enviar 📤
          </label>
          <input
            type="file"
            id="file-upload"
            accept=".pdf,.docx,.txt"
            onChange={handleUpload}
            style={{ display: "none" }}
          />
        </section>

        {/* Documentos Recentes */}
        <section className="document-list">
          <h2>Documentos Recentes</h2>
          <table>
            <thead>
              <tr>
                <th>Nome do Arquivo</th>
                <th>Data de Upload</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {documentos.map((doc, index) => (
                <tr key={index}>
                  <td>{doc.nome}</td>
                  <td>{doc.data}</td>
                  <td>{doc.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
