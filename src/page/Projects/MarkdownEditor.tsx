// import React, { useState } from "react";
// import MDEditor from "@uiw/react-md-editor";
// import MDPreview from "@uiw/react-md-editor";

// const MarkdownEditor: React.FC = () => {
//   const [markdown, setMarkdown] = useState("");

//   const handleChange = (value: string | undefined) => {
//     if (typeof value === "string") {
//       setMarkdown(value);
//     }
//   };

//   return (
//     <div className="markdown-editor">
//       <div className="markdown-input">
//         <MDEditor
//           value={markdown}
//           onChange={handleChange}
//           height={300}
//           placeholder="Write your markdown here..."
//         />
//       </div>
//       {/* <div className="markdown-preview">
//         <MDPreview markdown={markdown} />
//       </div> */}
//     </div>
//   );
// };

// export default MarkdownEditor;

// Toast 에디터
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function ToastEditor() {
  return (
    <div>
      <h3>### Editor Toast</h3>
      <Editor
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="500px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
      ></Editor>
    </div>
  );
}
