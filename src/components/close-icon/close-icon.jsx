import {ReactComponent as CloseIcon} from "../../Assets/shop-logos/circle-xmark-duotone.svg";
import React from "react";
const Close = ({remove, id}) => {
    return(
        <span onClick={() => remove(id)} className="remove icon"><CloseIcon/></span>
    )
}
export default Close;