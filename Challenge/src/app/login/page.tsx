import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center flex-grow bg-gray-100 py-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Entrar</h2>
        <form>
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
              placeholder="Sua senha"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <a href="#" className="text-blue-500 text-sm mb-4 block text-right">
            Esqueci minha senha
          </a>
          <button
            type="submit"
            className="w-full bg-[#8b2119] text-white py-2 rounded cursor-pointer hover:bg-gray-700"
          >
            Entrar
          </button>
          <p className="mt-4 text-center text-gray-600">
            Ainda não faz parte? <a href="/cadastro" className="text-blue-500">Cadastre-se!</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
