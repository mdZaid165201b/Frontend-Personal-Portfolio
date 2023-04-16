import { useState, useRef, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import JoditEditor from "jodit-react";
import { Editor } from "@tinymce/tinymce-react";

const Modal = ({ isVisible, onClose }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "mainWrapper") onClose();
  };

  const submitForm = () => {
    console.log(content);
  };

  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="mainWrapper"
    >
      <div className="w-[700px] flex flex-col">
        <button className="flex justify-end text-red-600 bg-[#2a2822] text-xl rounded-t-lg">
          <AiOutlineClose
            className="hover:text-red-400 m-1"
            onClick={() => onClose()}
            size={21}
          />
        </button>
        <hr class="h-[2px]   bg-gray-200 border-0 dark:bg-[#23211c]" />
        <div className="bg-[#2a2822]  p-2 rounded-b text-gray-200">
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Title
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="text"
                placeholder="Enter Project Title..."
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Assign
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="text"
                placeholder="Enter Name..."
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Status
              </label>
              <select
                data-te-select-init
                className="bg-[#2a2822] text-gray-200 block w-full p-1  border-b-2 border-green-800 focus:border-green-500 focus:outline-none"
              >
                <option value="4">Choose Status</option>
                <option value="1">Active</option>
                <option value="2">Pending</option>
                <option value="3">Complete</option>
              </select>
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Deadline
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="date"
                // placeholder="Enter Github Link..."
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center">
              <label className="text-gray-200 mx-5 w-[120px] tracking-wide">
                Choose Images
              </label>
              <input
                className="bg-[#2a2822]  block border-b-2 border-green-800 focus:outline-none focus:border-green-500 text-gray-200  w-full p-1"
                type="file"
                multiple
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="">
              <div className="mb-5">
                <label className="text-gray-200  pb-16 w-[120px]  tracking-wide">
                  Description
                </label>
              </div>
              {/* <JoditEditor
                ref={editor}
                value={content}
                config={{ theme: "dark", height: 300 }}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              /> */}
              {/* <Editor
                textareaName="Body"
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  skin: "oxide-dark",
                  content_css: "dark",
                }}
                onEditorChange={(newText) => setContent(newText)}
              /> */}
              <Editor
                textareaName="Body"
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "a11ychecker",
                    "advlist",
                    "advcode",
                    "advtable",
                    "autolink",
                    "checklist",
                    "export",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "powerpaste",
                    "fullscreen",
                    "formatpainter",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                  ],
                  // toolbar:
                  //   "undo redo | formatselect | " +
                  //   "bold italic backcolor | alignleft aligncenter " +
                  //   "alignright alignjustify | bullist numlist outdent indent | " +
                  //   "removeformat | help",
                  toolbar:
                    "undo redo | casechange blocks | bold italic backcolor | " +
                    "alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",

                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  skin: "oxide-dark",
                  content_css: "dark, custom",
                  content_css_custom: `
      .skin-dark {
        --ck-color-base-foreground: #161513;
        --ck-color-toolbar-background: #161513;
        --ck-color-base-background: #161513;
      }
    `,
                }}
                onEditorChange={(newText) => setContent(newText)}
              />
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <button
              className="text-gray-200 bg-green-700 px-4 py-2 rounded hover:bg-green-800 duration-75"
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
