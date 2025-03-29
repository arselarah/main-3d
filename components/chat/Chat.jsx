import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, X } from 'lucide-react'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('chatMessages')) || []
    }
    return []
  })
  const [loading, setLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('formSubmitted')) || false
    }
    return false
  })
  const [userInfo, setUserInfo] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('userInfo')) || { nombre: '', email: '', telefono: '' }
    }
    return { nombre: '', email: '', telefono: '' }
  })

  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, loading])

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    localStorage.setItem('formSubmitted', JSON.stringify(formSubmitted))
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }, [formSubmitted, userInfo])

  const toggleChat = () => setIsOpen(!isOpen)
  const closeChat = () => setIsOpen(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitForm = () => {
    if (userInfo.nombre && userInfo.email && userInfo.telefono) {
      if (userInfo.telefono.length !== 10) {
        alert('El número de teléfono debe tener 10 dígitos')
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
        alert('Por favor ingresa un correo válido')
        return
      }

      setFormSubmitted(true)
      const greeting = `¡Hola ${userInfo.nombre}! Bienvenido a Main-3D 👋. ¿En qué estás pensando usar tu impresora 3D?`
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
    } catch (error) {
      console.error('Error al registrar usuario:', error)
    }
  }

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMessage }])
    setLoading(true)

    try {
      const res = await fetch("https://main3d-api-rag.onrender.com/chat", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pregunta: userMessage,
          reiniciar: messages.length === 1
        }),
      })

      if (!res.ok) throw new Error('Respuesta del servidor no fue OK')

      const data = await res.json()
      setMessages(prev => [...prev, { from: 'bot', text: data.respuesta }])
    } catch (err) {
      console.error("❌ Error al conectar con el bot:", err)
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
      alert('✅ Conversación finalizada y guardada.')
      setMessages([])
      setInput('')
      setFormSubmitted(false)
      setUserInfo({ nombre: '', email: '', telefono: '' })
      localStorage.clear()
    } catch (err) {
      alert('❌ Error al finalizar la conversación.')
    }
  }

  return (
    <motion.div
      className='fixed bottom-4 right-4 z-50 flex items-end justify-end'
      initial={{ scale: 1 }}
      animate={{ scale: isOpen ? 1 : 1 }}
    >
      <motion.div
        layout
        className={`flex flex-col justify-between overflow-hidden bg-white shadow-lg ${
          isOpen ? 'h-[80vh] w-[90vw] sm:w-96 sm:h-[34rem] rounded-xl' : 'h-16 w-16 rounded-full'
        }`}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {!isOpen && (
          <div className='flex h-full items-center justify-center' onClick={toggleChat}>
            <MessageSquare size={32} className='text-gray-500' />
          </div>
        )}

        {isOpen && (
          <div className='flex h-full flex-col'>
            <div className='flex justify-end p-2'>
              <button onClick={closeChat}>
                <X size={24} className='text-gray-500 hover:text-gray-700' />
              </button>
            </div>

            {!formSubmitted ? (
              <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                <p className='text-sm font-semibold text-gray-600 text-center'>
                  Antes de comenzar, cuéntanos un poco de ti:
                </p>
                <input
                  type='text'
                  name='nombre'
                  placeholder='Nombre'
                  value={userInfo.nombre}
                  onChange={handleInputChange}
                  className='w-full rounded border p-2 text-sm'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Correo electrónico'
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className='w-full rounded border p-2 text-sm'
                />
                <input
                  type='tel'
                  name='telefono'
                  placeholder='Número de teléfono'
                  value={userInfo.telefono}
                  onChange={handleInputChange}
                  className='w-full rounded border p-2 text-sm'
                />
                <button
                  onClick={handleSubmitForm}
                  className='mt-2 w-full rounded bg-blue-500 py-2 text-sm text-white hover:bg-blue-600'
                >
                  Comenzar
                </button>
              </div>
            ) : (
              <>
                <div className='flex-1 overflow-y-auto p-2 space-y-2'>
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${
                        msg.from === 'user'
                          ? 'ml-auto bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                  {loading && <div className='text-sm text-gray-500'>Escribiendo...</div>}
                  <div ref={messagesEndRef} />
                </div>

                <div className='border-t border-gray-200 p-2'>
                  <input
                    type='text'
                    placeholder='Escribe un mensaje...'
                    className='w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <button
                    onClick={finalizarConversacion}
                    className='mt-2 w-full rounded bg-red-500 py-2 text-white hover:bg-red-600 text-sm'
                  >
                    Finalizar conversación
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
