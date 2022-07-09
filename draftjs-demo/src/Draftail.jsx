import 'draft-js/dist/Draft.css';
import 'draftail/dist/draftail.css';

import ReactDOM from 'react-dom';

import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from 'draftail';

const initial = JSON.parse(sessionStorage.getItem('draftail:content'));

const onSave = content => {
  console.log('saving', content);
  sessionStorage.setItem('draftail:content', JSON.stringify(content));
};

const Editor = (
  <DraftailEditor
    rawContentState={initial || null}
    onSave={onSave}
    blockTypes={[
      { type: BLOCK_TYPE.HEADER_THREE },
      { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
    ]}
    inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
  />
);

ReactDOM.render(Editor, document.querySelector('[data-mount]'));

export default Editor;
