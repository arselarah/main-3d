import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Minus } from 'lucide-react';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({ nombre: '', email: '', telefono: '' });
  const [menuVisible, setMenuVisible] = useState(true);
  const [submenu, setSubmenu] = useState(null);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = () => {
    if (userInfo.nombre && userInfo.email && userInfo.telefono) {
      if (userInfo.telefono.length !== 10) return alert('El número debe tener 10 dígitos');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) return alert('Email no válido');
      setFormSubmitted(true);
      const greeting = `¡Hola ${userInfo.nombre}! Bienvenido a Main-3D 👋. ¿Sobre qué tema te puedo ayudar?`;
      setMessages([{ from: 'bot', text: greeting }]);
      sendUserToSheets();
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  const sendUserToSheets = async () => {
    try {
      await fetch('https://main3d-api-rag.onrender.com/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });
    } catch (err) {
      console.error('Registro fallido', err);
    }
  };

  const sendMessage = async (message = input) => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text: message }]);
    setInput('');
    setMenuVisible(false);
    setLoading(true);
    try {
      const res = await fetch('https://main3d-api-rag.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pregunta: message, reiniciar: false })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { from: 'bot', text: data.respuesta }]);
      setMenuVisible(true);
    } catch {
      setMessages(prev => [...prev, { from: 'bot', text: '❌ Error al conectar con el bot' }]);
    } finally {
      setLoading(false);
    }
  };

  const finalizarConversacion = async () => {
    try {
      await fetch('https://main3d-api-rag.onrender.com/finalizar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInfo, messages })
      });
      alert('✅ Conversación guardada.');
      setMessages([]);
      setInput('');
      setFormSubmitted(false);
      setUserInfo({ nombre: '', email: '', telefono: '' });
      localStorage.clear();
    } catch {
      alert('❌ Error al finalizar.');
    }
  };

  const menuButtons = {
    productos: ['Impresoras 3D', 'Escáner 3D', 'Filamentos', 'Resinas', 'Otros'],
    servicios: ['Impresión 3D', 'Escaneo 3D', 'RV / RA', 'Cursos', 'Otros']
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center bg-white shadow-lg rounded-full w-14 h-14"
        >
          <MessageSquare className="text-gray-500" />
        </button>
      ) : (
        <div
          className="bg-white shadow-lg rounded-xl flex flex-col resize overflow-hidden"
          style={{
            height: '50vh', // Reduce la altura
            width: '70vw',  // Reduce el ancho
            maxWidth: '18rem', // Reduce el tamaño máximo
            minHeight: '24rem' // Reduce la altura mínima
          }}
        >
          <div
            className="flex items-center justify-between text-white px-4 py-3"
            style={{ backgroundColor: '#C72020' }}
          >
            <span className="font-bold">Main-3D Chat</span>
            <button onClick={closeChat} className="text-white text-xl">
              <Minus />
            </button>
          </div>

          {!formSubmitted ? (
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-center text-sm font-semibold mb-4">
                Antes de comenzar, cuéntanos un poco de ti:
              </p>
              <input
                name="nombre"
                placeholder="Nombre"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                value={userInfo.nombre}
                onChange={handleInputChange}
              />
              <input
                name="email"
                placeholder="Correo electrónico"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                value={userInfo.email}
                onChange={handleInputChange}
              />
              <input
                name="telefono"
                placeholder="Número de teléfono"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                value={userInfo.telefono}
                onChange={handleInputChange}
              />
              <button
                className="w-full p-2 rounded text-white font-semibold"
                style={{ backgroundColor: '#C72020' }}
                onClick={handleSubmitForm}
              >
                Comenzar
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-2 bg-gray-50" style={{ maxHeight: '100%', overflowY: 'auto' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} className={`mb-2 p-2 rounded-lg max-w-[80%] text-sm ${msg.from === 'user' ? 'ml-auto bg-blue-100 text-blue-800' : 'mr-auto bg-white border border-gray-200 text-gray-800'}`}>
                    {msg.text}
                  </div>
                ))}
                {loading && (
                  <div className="text-sm text-gray-500">Escribiendo...</div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {menuVisible && (
                <div className="px-3 pb-2">
                  {!submenu ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => setSubmenu('productos')} className="bg-blue-100 text-blue-600 py-2 rounded font-medium text-sm">Productos</button>
                      <button onClick={() => setSubmenu('servicios')} className="bg-blue-100 text-blue-600 py-2 rounded font-medium text-sm">Servicios</button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {menuButtons[submenu].map((item, idx) => (
                        <button key={idx} onClick={() => { sendMessage(item); setSubmenu(null); }} className="bg-blue-50 text-blue-700 py-2 rounded font-medium text-sm">{item}</button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="p-3 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <button
                    className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 text-sm"
                    onClick={() => sendMessage()}
                  >
                    Enviar
                  </button>
                </div>
                <button
                  onClick={finalizarConversacion}
                  style={{ borderColor: '#C72020', color: '#C72020' }}
                  className="w-full mt-2 border text-sm rounded py-2 hover:bg-red-50"
                >
                  Finalizar conversación
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
