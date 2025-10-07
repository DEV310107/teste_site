"use client";
import { useState } from "react";

export default function Home() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  function gerarSenha() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let senha = "";
    for (let i = 0; i < length; i++) {
      senha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(senha);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🔒 Gerador de Senhas Online</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 text-center">
        <label className="block mb-2">Comprimento: {length}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mb-4"
        />

        <button
          onClick={gerarSenha}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold"
        >
          Gerar Senha
        </button>

        {password && (
          <div className="mt-4 p-2 bg-black rounded-lg break-words">
            {password}
          </div>
        )}
      </div>

      <p className="mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} UtiliFácil — Ferramentas Online
      </p>
    </main>
  );
}
