'use client'

import { motion } from 'framer-motion'
import RippleButton from '@/components/ui/ripple-button'

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-center mt-6">Test Page</h1>
        <div className="max-w-6xl mx-auto mt-10 p-6">
          {/* Add your content here */}
        </div>
      </motion.div>
      <RippleButton rippleColor="#ADD8E6">Click me</RippleButton>;
    </div>
  )
}
