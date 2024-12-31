import { type ReactElement } from 'react'
import { Printer, Download } from "lucide-react"

export default function PrintButton(): ReactElement {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    window.open('https://media.mkan.xyz/Resume_Malin.pdf', '_blank');
  }

  const PrinterButton = () => (
    <button
      onClick={handlePrint}
      title="Print"
      className="bg-black text-yellow-300 hover:bg-yellow-300 hover:text-black px-4 py-2 rounded shadow print:hidden"
    >
      <Printer size={24} />
    </button>
  )

  const SavePDFButton = () => (
    <button
      onClick={handleDownload}
      title="Download PDF"
      className="bg-black text-yellow-300 hover:bg-yellow-300 hover:text-black px-4 py-2 rounded shadow print:hidden"
    >
      <Download size={24} />
    </button>
  )

  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <PrinterButton />
      <SavePDFButton />
    </div>
  )
}