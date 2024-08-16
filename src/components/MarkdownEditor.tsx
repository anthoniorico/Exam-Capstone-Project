import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'react-markdown-editor-lite/lib/index.css';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css'; // Ensure this CSS file is correctly imported

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  const handleEditorChange = ({ text }: { text: string }) => {
    onChange(text);
  };

  return (
    <div className="markdown-editor-container">
      <MdEditor
        value={value}
        style={{ height: '500px' }}
        renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default MarkdownEditor;