import { useContext, useEffect } from "react";
import { Modal } from "antd";
import { ClientContext } from "../Context/globalContext";

const Preview = ({ handleOk }) => {
  const uitoolkit = useContext(ClientContext)

  useEffect(() => {
    let previewContainer = document.getElementById("preview");
    uitoolkit.openPreview(previewContainer)
    return () => {uitoolkit.closePreview(previewContainer)}    
  }, [uitoolkit]);

  return (
    <>
      <Modal
        open={true}
        title="Preview"
        onOk={handleOk}
        width={700}
        footer={(_, { OkBtn }) => (
          <>
            <OkBtn />
          </>
        )}
      >
        <div id="preview"></div>
      </Modal>
    </>
  );
};

export default Preview;