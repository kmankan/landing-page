import { X } from 'lucide-react'
import Image from 'next/image'

interface PreviewModalProps {
  isOpen: boolean
  onClose: () => void
  url: string
  title: string
  previewImage: string
  description: string
  videoEmbed?: string
}

export function PreviewModal({ isOpen, onClose, url, title, previewImage, description, videoEmbed }: PreviewModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-11/12 max-w-2xl bg-[#1a1a1c] rounded-lg p-6">
        <button onClick={onClose} className="absolute right-4 top-4 p-2 text-white">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-[#ffffff]">{title}</h2>

        <div className="relative aspect-video mb-4 bg-[#262628]">
          {videoEmbed ? (
            <iframe
              src={videoEmbed}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
            />
          ) : (
            <Image
              src={previewImage}
              alt={`Preview of ${title}`}
              fill
              className="rounded-lg object-contain"
              priority
            />
          )}
        </div>

        <p className="text-white mb-6">{description}</p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 text-white font-bold rounded-lg"
          >
            Close
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#FFEE52] text-[#1a1a1c] font-bold rounded-lg hover:bg-gray-700 hover:text-yellow-300 transition-all"
          >
            Visit Site
          </a>
        </div>
      </div>
    </div>
  )
} 