import React from "react";

export default function LayoutBasic(props) {
    const {children} = props

    return(
        <div>
            <div>MENU TOP</div>
            <div>{children}</div>
            <footer>Copy...</footer>
        </div>

    )


}