import style from './ModelBox.module.css';

const ModelBoxContent = (props) => {
    return (
        <>
            <div className={`${style.modal} ${ style.show}`}>
                <div className={`${style['modal-content']}`}>
                    <span className={`${style.close}`} onClick={() => {
                         props.onConfirm();
                    }}>&times;</span>
                    <div className="content-box">
                        {props.children}
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => {
                            props.onConfirm(true);
                        }}>Accept</button>
                    </div>
                </div>

            </div>
        </>
    )
};
export default ModelBoxContent;