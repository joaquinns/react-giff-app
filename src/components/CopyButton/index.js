import { useState, useCallback } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PropTypes from 'prop-types'
import { HiOutlineClipboardCopy } from 'react-icons/hi'

export default function CopyButton({ text }) {
  const [copy, setCopy] = useState(false)

  const handleCopy = useCallback(() => {
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 1000)
  }, [])

  return (
    <CopyToClipboard text={text}>
      <button
        onClick={handleCopy}
        className=' bg-indigo-800 text-white flex justify-center gap-1 font-bold px-5 py-2 rounded hover:opacity-70 transition-all duration-200'
      >
        <HiOutlineClipboardCopy size={22} />
        {copy ? 'copied!' : 'copy'}
      </button>
    </CopyToClipboard>
  )
}

CopyButton.propTypes = {
  text: PropTypes.string
}
