import ModelBoxContent from "./ModelBoxContent";
import ReactDOM from "react-dom";

const ModelBox = (props) => {
    return (
        <>
            {
                ReactDOM.createPortal( <ModelBoxContent {...props}/>,document.getElementById('modalbox-root'))
            }
        </>
    )
}
export default ModelBox;
