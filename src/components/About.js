import React from 'react'

export default function About() {
  return (
    <>
    <div className='container'>
        <h2>About us</h2>
        <h5>Plain text and rich text:</h5>
        <p>&emsp;Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions, such as ASCII, ISO/IEC 2022, Shift JIS, UTF-8, or UTF-16. These conventions define many printable characters, but also non-printing characters that control the flow of the text, such as space, line break, and page break. Plain text contains no other information about the text itself, not even the character encoding convention employed. Plain text is stored in text files, although text files do not exclusively store plain text. Since the early days of computers, plain text was (once by necessity and now by convention) generally displayed using a monospace font, such that horizontal alignment and columnar formatting were sometimes done using whitespace characters.

        Rich text, on the other hand, may contain metadata, character formatting data (e.g. typeface, size, weight and style), paragraph formatting data (e.g. indentation, alignment, letter and word distribution, and space between lines or other paragraphs), and page specification data (e.g. size, margin and reading direction). Rich text can be very complex. Rich text can be saved in binary format (e.g. DOC), text files adhering to a markup language (e.g. RTF or HTML), or in a hybrid form of both (e.g. Office Open XML).

        Text editors are intended to open and save text files containing either plain text or anything that can be interpreted as plain text, including the markup for rich text or the markup for something else (e.g. SVG).</p>

    </div>
    </>
  )
}
