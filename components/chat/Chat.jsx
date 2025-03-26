import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, X } from 'lucide-react'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [userInfo, setUserInfo] = useState({ nombre: '', email: '', telefono: '' })

  const toggleChat = () => setIsOpen(!isOpen)
  const closeChat = () => setIsOpen(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitForm = () => {
    if (userInfo.nombre && userInfo.email && userInfo.telefono) {
      setFormSubmitted(true)
    } else {
      alert('Por favor completa todos los campos')
    }
  }

  const sendMessage = async () => {
    if (!input.trim()) return
    const isFirstMessage = messages.length === 0
    setMessages(prev => [...prev, { from: 'user', text: input }])
    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pregunta: input, reiniciar: isFirstMessage })
      })

      const data = await res.json()
      setMessages(prev => [...prev, { from: 'bot', text: data.respuesta }])
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: '❌ Error al conectar con el bot' }])
    } finally {
      setInput('')
      setLoading(false)
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
        className={`flex cursor-pointer flex-col justify-between overflow-hidden bg-white p-4 shadow-lg ${
          isOpen ? 'h-[32rem] w-80 cursor-default' : 'h-16 w-16'
        }`}
        initial={{ width: '4rem', height: '4rem', borderRadius: '4rem' }}
        animate={{
          width: isOpen ? '20rem' : '4rem',
          height: isOpen ? '32rem' : '4rem',
          borderRadius: isOpen ? '1rem' : '4rem',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {!isOpen && (
          <div
            className='flex h-full items-center justify-center'
            onClick={toggleChat}
          >
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
              <div className='flex-1 overflow-y-auto p-2 space-y-2'>
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
                      className={`text-sm ${
                        msg.from === 'user'
                          ? 'text-right text-blue-700'
                          : 'text-left text-gray-700'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                  {loading && <div className='text-gray-400 text-sm'>Escribiendo...</div>}
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
                </div>
              </>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
