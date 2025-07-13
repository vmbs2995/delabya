'use client';

import { useState } from 'react';
import Image from 'next/image';
import Background from '../components/Background';
import Link from "next/link";



const AuthPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <Background>
     <div className="min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-white rounded-xl shadow-lg p-8 md:p-12 w-full max-w-5xl gap-10 min-h-[500px]">
          
          {/* Columna Izquierda: Logo */}
          <div className="flex flex-col items-center justify-center text-center md:w-1/2 w-full h-full">
            <Image
              src="/logo-delabya.PNG"
              alt="Delabya Logo"
              width={200}
              height={200}
              className="mb-6 border rounded-lg"
            />
          </div>

          {/* Columna Derecha: Formulario animado */}
          <div className="relative w-full md:w-1/2 perspective">
            <div className={`relative w-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              
              {/* Login */}
              <div className="absolute inset-0 backface-hidden overflow-y-auto max-h-full px-2 pb-4">
                <div className="mb-6 text-left">
                  <h2 className="text-2xl font-bold">Inicia sesión en tu cuenta</h2>
                  <p className="text-sm text-zinc-400 mt-2">
                    Ingrese su correo electrónico para iniciar sesión
                  </p>
                </div>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">Correo electrónico</label>
                    <input type="email" id="email" placeholder="@ejemplo.com" className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="password" className="text-sm font-semibold">Contraseña</label>
                      <button type="button" className="text-sm text-blue-400 hover:underline">Solicitar Contraseña</button>
                    </div>
                    <input type="password" id="password" placeholder="Clave de 6 dígitos" className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-2 rounded-md border border-zinc-700 hover:bg-zinc-700 transition">Iniciar sesión</button>
                  <button type="button" onClick={() => setIsFlipped(true)} className="w-full text-blue-400 underline text-sm text-center mt-2">¿No tienes cuenta? Registrarte</button>
                  
                </form>
                
              </div>

              {/* Registro */}
<div className="absolute inset-0 rotate-y-180 backface-hidden px-2 pb-4 flex flex-col">
  <div className="mb-6 text-left">
    <h2 className="text-2xl font-bold">Crea tu cuenta</h2>
    <p className="text-sm text-zinc-400 mt-2">Complete los campos para registrarse</p>
  </div>

  {/* Campos scrollables */}
  <div className="flex-1 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-600 hover:scrollbar-thumb-zinc-500 pr-1 space-y-4">
    <input type="text" placeholder="Nombre" className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none" />
    <input type="text" placeholder="Apellido Paterno" className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none" />
    <input type="text" placeholder="Apellido Materno" className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none" />
    <input type="email" placeholder="Correo Electrónico" className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none" />
    <input type="text" placeholder="Celular" className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none" />
    <select className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none">
      <option value="">Seleccione un rol</option>
      <option value="admin">Docente</option>
      <option value="usuario">Estudiante</option>
    </select>
  </div>

  {/* Botones fijos abajo */}
  <div className="mt-4 space-y-2">
    <button type="submit" className="w-full bg-black text-white py-2 rounded-md border border-zinc-700 hover:bg-zinc-700 transition">Registrarse</button>
    <button type="button" onClick={() => setIsFlipped(false)} className="w-full text-blue-400 underline text-sm text-center">¿Ya tienes cuenta? Iniciar sesión</button>
  </div>
</div>
</div>
          </div>

        </div>
      </div>
    </Background>

    );
}

export default AuthPage;