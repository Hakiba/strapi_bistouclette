import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box } from "@strapi/design-system/Box";

const Wrapper = styled(Box)`
  .ck-editor__main {
    min-height: ${200 / 16}em;
    > div {
      min-height: ${200 / 16}em;
    }

    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    strong {
      font-weight: bold;
    }
    i {
      font-style: italic;
    }

    li {
      list-style-type: disc;
    }

    // Since Strapi resets css styles, it can be configured here (h2, h3, strong, i, ...)
  }
`;

const configuration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "|",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ],
};

const Editor = ({ onChange, name, value, disabled }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        disabled={disabled}
        config={configuration}
        data={value || ""}
        onReady={(editor) => editor.setData(value || "")}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.defaultProps = {
  value: "",
  disabled: false,
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Editor;
