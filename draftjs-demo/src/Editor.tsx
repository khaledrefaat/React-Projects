import {
  Editor as DraftEditor,
  EditorCommand,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
} from 'draft-js';
import { useEffect, useRef, useState } from 'react';
import EditorUtilities from './EditorUtilities';

const Editor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const editorRef = useRef<DraftEditor>(null);

  const focus = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  useEffect(() => {
    focus();
  }, []);

  const onEditorChange = (editorState: EditorState) =>
    setEditorState(editorState);

  const handelKeyCommand = (command: EditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyles = (command: string) =>
    onEditorChange(RichUtils.toggleInlineStyle(editorState, command));

  console.log(editorState.getCurrentInlineStyle());

  return (
    <div className="w-96 h-96  mx-auto mt-10 flex flex-col">
      <div className="border-2 border-gray-500 flex-1">
        <EditorUtilities onToggle={toggleInlineStyles} />
        {/* <EditorUtilities
          onEditorChange={onEditorChange}
          editorState={editorState}
        /> */}
        <DraftEditor
          editorState={editorState}
          onChange={onEditorChange}
          handleKeyCommand={handelKeyCommand}
          ref={editorRef}
          spellCheck
          placeholder="Tell a story"
          keyBindingFn={getDefaultKeyBinding}
        />
      </div>
    </div>
  );
};

export default Editor;
