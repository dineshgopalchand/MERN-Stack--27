import React, { Fragment } from "react";

const ModelBox = () => {
    return (
        <>
            <React.Fragment key='some'>
                Model Box
            </React.Fragment>
            <Fragment key='some'>
                Model Box
            </Fragment>
            <>
                Model Box
            </>
        </>
    )
};
export default ModelBox;