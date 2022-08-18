import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

export default class EditorConvertToHTML extends Component {
  // constructor({getDescription}) {
  //   super()

  // }
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    console.log(this.value);
    this.setState({
      editorState,
    });
  };
  blocks = convertToRaw(this.state.editorState.getCurrentContent()).blocks;
  value = this.blocks
    .map((block) => (!block.text.trim() && "\n") || block.text)
    .join("\n");

  render() {
    const { editorState } = this.state.editorState;
    return (
      <div>
        <Editor
          placeholder="متن خود را وارد کنید"
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}
