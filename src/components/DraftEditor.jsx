import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { useEffect } from 'react';



const TextEditor = styled.div`
height: 200px;
overflow-y: scroll;
`


export default function CKeditor({editContext , getDescription}) {

  const [addData , setValue] =useState("");
  useEffect(()=>{
    setValue(editContext)
  },[editContext])

  const handleChange = (e , editor)=>{

    const data = editor.getData();
    setValue(data);
    getDescription(data)
  }
  return (
    <TextEditor>
      <CKEditor editor={ClassicEditor} data={addData} onChange={handleChange} />
    </TextEditor>
  )
}
