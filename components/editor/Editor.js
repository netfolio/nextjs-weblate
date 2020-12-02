import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import axios from "axios";
import {postsApi} from "../../services/adminApi";
import authHeader from "../../services/auth-header";
import {Button} from "antd";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});

const modules = {
  toolbar: [
    [{header: [1, 2, 3, 4, 5, 6, false]}],
    ["bold", "italic", "underline", "strike"],
    [{list: "ordered"}, {list: "bullet"}, "align"],
    ["blockquote", "code-block"],
    ["link", "image"]
  ]
};

export const Editor = () => {
  const [state, setState] = React.useState({contentId: null});

  const handleChange = contentId => {
    setState({contentId});
  };
  console.log('state', state.contentId)

  const saveContent = () => {
    const content = state.contentId;
    axios.post(
      postsApi.post,
      {
        title: "New Title 11",
        body: content,
        author: "Laurent",
        category_id: 10
      },
      {headers: authHeader()})
  }

  return (
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        defaultValue={state.contentId}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
      />
      <br />
      <Button
        type="primary"
        htmlType="submit"
        onClick={saveContent}
      >
        Save
      </Button>
    </div>
  );
};

export default Editor;
