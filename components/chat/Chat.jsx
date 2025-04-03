import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [userInfo, setUserInfo] = useState({ nombre: '', email: '', telefono: '' })
  const [menuVisible, setMenuVisible] = useState(true)
  const [submenu, setSubmenu] = useState(null)

  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, loading])

  const toggleChat = () => setIsOpen(!isOpen)
  const closeChat = () => setIsOpen(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitForm = () => {
    if (userInfo.nombre && userInfo.email && userInfo.telefono) {
      if (userInfo.telefono.length !== 10) return alert('El número debe tener 10 dígitos')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) return alert('Email no válido')
      setFormSubmitted(true)
      const greeting = `¡Hola ${userInfo.nombre}! Bienvenido a Main-3D 👋. ¿Sobre qué tema te puedo ayudar?`
      setMessages([{ from: 'bot', text: greeting }])
      sendUserToSheets()
    } else {
      alert('Por favor completa todos los campos')
    }
  }

  const sendUserToSheets = async () => {
    try {
      await fetch('https://main3d-api-rag.onrender.com/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      })
    } catch (err) {
      console.error('Registro fallido', err)
    }
  }

  const sendMessage = async (message = input) => {
    if (!message.trim()) return
    setMessages(prev => [...prev, { from: 'user', text: message }])
    setInput('')
    setMenuVisible(false)
    setLoading(true)
    try {
      const res = await fetch('https://main3d-api-rag.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pregunta: message, reiniciar: false })
      })
      const data = await res.json()
      setMessages(prev => [...prev, { from: 'bot', text: data.respuesta }])
      setMenuVisible(true)
    } catch {
      setMessages(prev => [...prev, { from: 'bot', text: '❌ Error al conectar con el bot' }])
    } finally {
      setLoading(false)
    }
  }

  const finalizarConversacion = async () => {
    try {
      await fetch('https://main3d-api-rag.onrender.com/finalizar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInfo, messages })
      })
integracion_bot
      alert('✅ Conversación guardada.')
    main
      setMessages([])
      setInput('')
      setFormSubmitted(false)
      setUserInfo({ nombre: '', email: '', telefono: '' })
      localStorage.clear()
    } catch {
      alert('❌ Error al finalizar.')
    }
  }

  const menuButtons = {
    productos: ['Impresoras 3D', 'Escáner 3D', 'Filamentos', 'Resinas', 'Otros'],
    servicios: ['Impresión 3D', 'Escaneo 3D', 'RV / RA', 'Cursos', 'Otros']
  }

  return (
    <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
      <motion.div
        layout
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          backgroundColor: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          borderRadius: isOpen ? 12 : '9999px',
          height: isOpen ? '80vh' : 64,
          width: isOpen ? '90vw' : 64,
          maxWidth: 384,
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {!isOpen ? (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={toggleChat}>
            <MessageSquare size={32} color="gray" />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 8 }}>
              <button onClick={closeChat} style={{ fontSize: 20, fontWeight: 'bold', color: '#666' }}>-</button>
            </div>

            {!formSubmitted ? (
              <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
                <p style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: '#333' }}>Antes de comenzar, cuéntanos un poco de ti:</p>
                <input style={inputStyle} type='text' name='nombre' placeholder='Nombre' value={userInfo.nombre} onChange={handleInputChange} />
                <input style={inputStyle} type='email' name='email' placeholder='Correo electrónico' value={userInfo.email} onChange={handleInputChange} />
                <input style={inputStyle} type='tel' name='telefono' placeholder='Número de teléfono' value={userInfo.telefono} onChange={handleInputChange} />
                <button style={buttonStyle} onClick={handleSubmitForm}>Comenzar</button>
              </div>
            ) : (
              <>
                <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
                  {messages.map((msg, idx) => (
                    <div key={idx} style={{
                      alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                      backgroundColor: msg.from === 'user' ? '#e0f0ff' : '#f2f2f2',
                      padding: 10,
                      borderRadius: 10,
                      marginBottom: 6,
                      maxWidth: '80%',
                      color: '#222',
                      fontSize: 14
                    }}>{msg.text}</div>
                  ))}
                  {loading && <div style={{ fontSize: 14, color: '#999' }}>Escribiendo...</div>}
                  <div ref={messagesEndRef} />
                </div>

                {menuVisible && (
                  <div style={{ padding: 8 }}>
                    {!submenu ? (
                      <>
                        <button style={menuBtn} onClick={() => setSubmenu('productos')}>Productos</button>
                        <button style={menuBtn} onClick={() => setSubmenu('servicios')}>Servicios</button>
                      </>
                    ) : (
                      <>
                        {menuButtons[submenu].map((item, i) => (
                          <button key={i} style={menuBtn} onClick={() => {
                            sendMessage(item)
                            setSubmenu(null)
                          }}>{item}</button>
                        ))}
                      </>
                    )}
                  </div>
                )}

                <div style={{ padding: 8 }}>
                  <input
                    style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ccc', marginBottom: 8 }}
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <button style={buttonStyle} onClick={finalizarConversacion}>Finalizar conversación</button>
                </div>
              </>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  borderRadius: 6,
  border: '1px solid #ccc',
  padding: 10,
  marginTop: 8,
  fontSize: 14
}

const buttonStyle = {
  width: '100%',
  borderRadius: 6,
  backgroundColor: '#3b82f6',
  color: '#fff',
  padding: 10,
  fontSize: 14,
  marginTop: 8,
  cursor: 'pointer'
}

const menuBtn = {
  display: 'block',
  width: '100%',
  backgroundColor: '#e6efff',
  border: 'none',
  padding: 12,
  marginBottom: 6,
  borderRadius: 8,
  color: '#1d4ed8',
  fontWeight: 500,
  fontSize: 14,
  cursor: 'pointer'
}
