import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const closeChat = () => {
    setIsOpen(false)
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
          isOpen ? 'h-96 w-80 cursor-default' : 'h-16 w-16'
        }`}
        initial={{
          width: '4rem',
          height: '4rem',
          borderRadius: '4rem',
        }}
        animate={{
          width: isOpen ? '20rem' : '4rem',
          height: isOpen ? '24rem' : '4rem',
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

            <div className='flex-1 overflow-y-auto p-2'>
              <p className='mt-2 text-center text-gray-500'>
                Bienvenido al chat!
              </p>
              {/* Aquí irían los mensajes */}
            </div>

            <div className='border-t border-gray-200 p-2'>
              <input
                type='text'
                placeholder='Escribe un mensaje...'
                className='w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
