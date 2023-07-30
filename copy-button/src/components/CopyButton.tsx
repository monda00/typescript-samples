"use client"
import copy from "clipboard-copy"
import { useState } from "react"

const CopyButton = ({ copyText }: { copyText: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    copy(copyText).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    })
  }

  return (
    <button disabled={isCopied} onClick={handleCopy}>
      {isCopied ? "Copied!" : "Copy"}
    </button>
  )
}
export default CopyButton