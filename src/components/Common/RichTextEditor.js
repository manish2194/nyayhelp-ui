import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

function RichTextEditor({ value, onChange }) {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: '1'}, {header: '2'}, { font: [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link', 'image', 'video'],
            [{ 'align': [] }],
            ['clean']                                        
          ]
        }
      });

      quillRef.current.on('text-change', () => {
        onChange(quillRef.current.root.innerHTML);
      });
    }

    if (quillRef.current) {
      quillRef.current.root.innerHTML = value;
    }
  }, [value]);

  return (
    <div ref={editorRef} style={{ height: '300px'}}></div>
  );
}

export default RichTextEditor;

