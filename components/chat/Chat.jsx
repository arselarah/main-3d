import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Minus, GripHorizontal } from 'lucide-react';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({ nombre: '', email: '', telefono: '' });
  const [menuVisible, setMenuVisible] = useState(true);
  const [submenu, setSubmenu] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);
  const tooltipTimeoutRef = useRef(null);

  useEffect(() => {
    const startTooltipCycle = () => {
      if (!isOpen) {
        tooltipTimeoutRef.current = setInterval(() => {
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 5000); // Hide after 5 seconds
        }, 45000); // Show every 45 seconds
      }
    };

    startTooltipCycle();

    return () => {
      if (tooltipTimeoutRef.current) {
        clearInterval(tooltipTimeoutRef.current);
      }
    };
  }, [isOpen]);

  // Clear tooltip interval when chat opens
  useEffect(() => {
    if (isOpen && tooltipTimeoutRef.current) {
      clearInterval(tooltipTimeoutRef.current);
      setShowTooltip(false);
    }
  }, [isOpen]);

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
        <div className="relative group">
          <button
            onClick={toggleChat}
            className="flex items-center justify-center bg-[#C72020] shadow-lg rounded-full w-14 h-14 hover:bg-[#a81b1b] transition-all duration-300 group-hover:rounded-xl"
          >
            <MessageSquare className="text-white" />
          </button>
          <div 
            className={`absolute right-0 bottom-full mb-2 pointer-events-none transition-all duration-300 transform ${
              showTooltip || 'group-hover:opacity-100 group-hover:translate-y-0'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-1'
            }`}
          >
            <div className="bg-white text-[#C72020] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium">
              ¡Hola! Soy MainBot, aquí estoy si ocupas algo 👋
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white transform rotate-45"></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-white shadow-xl rounded-xl flex flex-col overflow-hidden resize"
          style={{
            height: '500px',
            width: '350px',
            minHeight: '400px',
            minWidth: '300px',
            maxHeight: '80vh',
            maxWidth: '90vw'
          }}
        >
          <div
            className="flex items-center justify-between text-white px-4 py-3 cursor-move"
            style={{ backgroundColor: '#C72020' }}
          >
            <span className="font-bold">Main-3D Chat</span>
            <div className="flex items-center gap-2">
              <GripHorizontal className="cursor-move" size={18} />
              <button 
                onClick={closeChat}
                className="hover:bg-[#a81b1b] p-1 rounded transition-colors duration-200"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          {!formSubmitted ? (
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <p className="text-center text-sm font-semibold mb-4">
                Antes de comenzar, cuéntanos un poco de ti:
              </p>
              <input
                name="nombre"
                placeholder="Nombre"
                className="w-full mb-2 p-2 border border-gray-300 rounded focus:border-[#C72020] focus:outline-none transition-colors"
                value={userInfo.nombre}
                onChange={handleInputChange}
              />
              <input
                name="email"
                placeholder="Correo electrónico"
                className="w-full mb-2 p-2 border border-gray-300 rounded focus:border-[#C72020] focus:outline-none transition-colors"
                value={userInfo.email}
                onChange={handleInputChange}
              />
              <input
                name="telefono"
                placeholder="Número de teléfono"
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:border-[#C72020] focus:outline-none transition-colors"
                value={userInfo.telefono}
                onChange={handleInputChange}
              />
              <button
                className="w-full p-2 rounded text-white font-semibold bg-[#C72020] hover:bg-[#a81b1b] transition-colors duration-200"
                onClick={handleSubmitForm}
              >
                Comenzar
              </button>
            </div>
          ) : (
            <>
              <div 
                className="flex-1 overflow-y-auto p-3 bg-[#f0f2f5]" 
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#C72020 #f0f2f5' }}
              >
                <div className="flex flex-col space-y-2">
                  {messages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`p-3 rounded-lg max-w-[75%] shadow-sm ${
                          msg.from === 'user' 
                            ? 'bg-[#C72020] text-white rounded-br-none' 
                            : 'bg-white text-gray-800 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex items-center space-x-2 text-gray-500 p-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {menuVisible && (
                <div className="p-3 bg-white border-t border-gray-100">
                  {!submenu ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => setSubmenu('productos')} 
                        className="bg-[#f8e5e5] text-[#C72020] py-2 px-4 rounded-lg font-medium text-sm hover:bg-[#fad6d6] transition-colors duration-200"
                      >
                        Productos
                      </button>
                      <button 
                        onClick={() => setSubmenu('servicios')} 
                        className="bg-[#f8e5e5] text-[#C72020] py-2 px-4 rounded-lg font-medium text-sm hover:bg-[#fad6d6] transition-colors duration-200"
                      >
                        Servicios
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        {menuButtons[submenu].map((item, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => { sendMessage(item); setSubmenu(null); }}
                            className="bg-[#f8e5e5] text-[#C72020] py-2 px-3 rounded-lg font-medium text-sm hover:bg-[#fad6d6] transition-colors duration-200"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setSubmenu(null)}
                        className="text-sm text-gray-500 hover:text-[#C72020] transition-colors duration-200"
                      >
                        ← Volver
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="p-3 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#C72020] transition-colors"
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim()}
                    className="bg-[#C72020] text-white px-4 rounded-lg hover:bg-[#a81b1b] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
