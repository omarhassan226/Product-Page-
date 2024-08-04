import React from "react";
import { colors } from "../../../../../../../../colors/colors";

const Sizes = ({ size, handleSizeToggle, isSelected }) => {
    return (
        <div
            style={{
                fontSize: "28px",
                outline: `1px solid ${colors.darkText}`,
                marginRight: "15px",
                padding: "10px",
                borderRadius: "10px",
                width: "60px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: isSelected ? colors.green : "transparent", // Highlight selected sizes
                color: isSelected ? colors.white : "black" // Highlight selected sizes
            }}
            onClick={handleSizeToggle}
        >
            <h4>{size.size}</h4>
        </div>
    );
};

export default Sizes;
