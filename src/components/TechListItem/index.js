import React from "react";

function TechListItem(props) {

    return props.techItems.map(technology => {
            return <li className="techUsed">{technology}</li>
    })
}

export default TechListItem;