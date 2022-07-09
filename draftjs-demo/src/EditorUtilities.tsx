interface EditorUtilitiesProps {
  onToggle: (command: string) => void;
}

const EditorUtilities: React.FC<EditorUtilitiesProps> = ({ onToggle }) => {
  const onBoldClick = () => onToggle('BOLD');

  const onItalicClick = () => onToggle('ITALIC');

  const onUnderlineClick = () => onToggle('UNDERLINE');

  const onCodeClick = () => onToggle('CODE');

  return (
    <div>
      <button onMouseDown={onBoldClick}>B</button>
      <button onMouseDown={onItalicClick} className="ml-5">
        I
      </button>
      <button onMouseDown={onUnderlineClick} className="ml-5">
        U
      </button>
      <button onMouseDown={onCodeClick} className="ml-5">
        Code
      </button>
    </div>
  );
};

export default EditorUtilities;

// import { EditorState, RichUtils } from 'draft-js';

// interface EditorUtilitiesProps {
//   onEditorChange: (editorState: EditorState) => void;
//   editorState: EditorState;
// }

// const EditorUtilities: React.FC<EditorUtilitiesProps> = ({
//   onEditorChange,
//   editorState,
// }) => {
//   const onBoldClick = () =>
//     onEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));

//   const onItalicClick = () =>
//     onEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));

//   const onUnderlineClick = () =>
//     onEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));

//   const onCodeClick = () =>
//     onEditorChange(RichUtils.toggleInlineStyle(editorState, 'CODE'));

//   const onMonoSpaceClick = () => {
//     onEditorChange(RichUtils.toggleInlineStyle(editorState, 'MONOSPACE'));
//   };

//   return (
//     <div>
//       <button onClick={onBoldClick}>B</button>
//       <button onClick={onItalicClick} className="ml-5">
//         I
//       </button>
//       <button onClick={onUnderlineClick} className="ml-5">
//         U
//       </button>
//       <button onClick={onCodeClick} className="ml-5">
//         Code
//       </button>
//       <button onClick={onMonoSpaceClick} className="ml-5">
//         Monospace
//       </button>
//     </div>
//   );
// };

// export default EditorUtilities;
