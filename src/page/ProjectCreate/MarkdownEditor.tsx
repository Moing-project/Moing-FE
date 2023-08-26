import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import React, { forwardRef } from "react";

interface ToastEditorProps {
  ref?: React.Ref<Editor>;
  value: string;
  onChange: (content: string) => void;
}

const ToastEditor: React.ForwardRefRenderFunction<Editor, ToastEditorProps> = (
  { value, onChange },
  ref
) => {
  return (
    <Editor
      ref={ref}
      initialValue={value || " "}
      placeholder="프로젝트에 대한 자세한 소개를 작성해주세요."
      previewStyle="vertical"
      hideModeSwitch={true}
      onChange={onChange}
      minHeight="500px" // 최소 높이 설정
      height="auto"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol"],
        ["link", "image"],
      ]}
    />
  );
};

export default forwardRef(ToastEditor);
