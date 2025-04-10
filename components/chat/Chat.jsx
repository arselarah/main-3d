import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Minus, Send } from 'lucide-react';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({ nombre: '', email: '', telefono: '' });
  const [menuVisible, setMenuVisible] = useState(true);
  const [submenu, setSubmenu] = useState(null);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const toggleChat = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

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

  // Render the chat component
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <div 
          className={`
            flex items-center overflow-hidden shadow-md transition-all duration-300 ease-in-out cursor-pointer
            ${isHovering ? 
              'bg-white border border-gray-200 rounded-3xl py-3 px-4 w-64' : 
              'bg-white rounded-full h-14 w-14 justify-center items-center'}
          `}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={toggleChat}
        >
          {isHovering ? (
            <>
              <div className="flex-shrink-0 flex items-center justify-center mr-3">
                <MessageSquare size={24} className="text-blue-500" />
              </div>
              <div className="text-blue-600 font-medium whitespace-nowrap">
                Hola, soy Main-3D bot
              </div>
            </>
          ) : (
            <MessageSquare size={24} className="text-gray-500" />
          )}
        </div>
      )}
      
      {isOpen && (
        <div className="flex flex-col bg-white rounded-xl shadow-lg h-96 w-80 overflow-hidden">
          {/* Chat header */}
          <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
            <div className="font-medium">Main-3D Chat</div>
            <button onClick={closeChat} className="text-white font-bold text-xl leading-none">
              -
            </button>
          </div>

          {!formSubmitted ? (
            // User info form
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-center text-sm font-medium text-gray-700 mb-4">
                Antes de comenzar, cuéntanos un poco de ti:
              </p>
              <input 
                className="w-full rounded-md border border-gray-300 p-2 text-sm mb-3" 
                type="text" 
                name="nombre" 
                placeholder="Nombre" 
                value={userInfo.nombre} 
                onChange={handleInputChange} 
              />
              <input 
                className="w-full rounded-md border border-gray-300 p-2 text-sm mb-3" 
                type="email" 
                name="email" 
                placeholder="Correo electrónico" 
                value={userInfo.email} 
                onChange={handleInputChange} 
              />
              <input 
                className="w-full rounded-md border border-gray-300 p-2 text-sm mb-3" 
                type="tel" 
                name="telefono" 
                placeholder="Número de teléfono" 
                value={userInfo.telefono} 
                onChange={handleInputChange} 
              />
              <button 
                className="w-full bg-blue-500 text-white rounded-md p-2 text-sm font-medium hover:bg-blue-600"
                onClick={handleSubmitForm}
              >
                Comenzar
              </button>
            </div>
          ) : (
            // Chat conversation
            <>
              <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`
                    max-w-3/4 p-3 mb-2 rounded-lg text-sm
                    ${msg.from === 'user' 
                      ? 'ml-auto bg-blue-100 text-blue-800' 
                      : 'mr-auto bg-white border border-gray-200 text-gray-800 flex items-start'}
                  `}>
                    {msg.from === 'bot' && (
                      <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-2 shrink-0">
                        <span className="text-white text-xs">🤖</span>
                      </div>
                    )}
                    <div>{msg.text}</div>
                  </div>
                ))}
                {loading && (
                  <div className="text-sm text-gray-500 flex items-center">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">🤖</span>
                    </div>
                    <div>Escribiendo...</div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick menu options */}
              {menuVisible && (
                <div className="px-2 pt-2">
                  {!submenu ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        className="bg-blue-50 text-blue-600 p-2 rounded text-sm font-medium hover:bg-blue-100"
                        onClick={() => setSubmenu('productos')}
                      >
                        Productos
                      </button>
                      <button 
                        className="bg-blue-50 text-blue-600 p-2 rounded text-sm font-medium hover:bg-blue-100"
                        onClick={() => setSubmenu('servicios')}
                      >
                        Servicios
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {menuButtons[submenu].map((item, i) => (
                        <button 
                          key={i} 
                          className="bg-blue-50 text-blue-600 p-2 rounded text-sm font-medium hover:bg-blue-100"
                          onClick={() => {
                            sendMessage(item);
                            setSubmenu(null);
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Message input */}
              <div className="p-3 border-t border-gray-200">
                <div className="flex">
                  <input
                    className="flex-1 p-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <button 
                    className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
                    onClick={() => sendMessage()}
                  >
                    <Send size={16} />
                  </button>
                </div>
                <button 
                  className="w-full mt-2 p-2 text-sm border rounded hover:bg-red-50"
                  style={{ borderColor: '#C72020', color: '#C72020' }}
                  onClick={finalizarConversacion}
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