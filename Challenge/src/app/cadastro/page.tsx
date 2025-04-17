import React from 'react';

const CadastroForm = () => {
  return (
    <div className="flex items-center justify-center flex-grow bg-gray-100 py-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Cadastrar</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="nome">
              Nome completo
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Seu nome"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="seu-email@exemplo.com"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              placeholder="Crie uma senha"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8b2119] text-white py-2 rounded cursor-pointer hover:bg-gray-700"
          >
            Cadastrar
          </button>
          <p className="mt-4 text-center text-gray-600">
            Já tem uma conta? <a href="/login" className="text-blue-500">Entrar</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;
