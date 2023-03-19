import React from "react";
import { Icon } from '@iconify/react';
import "../sectionCards.css"
const Arrow = () => {
return (
    <>
    <div className="arrow">
        <button><Icon icon="material-symbols:arrow-circle-left-sharp" className="ar" /></button>
        <button><Icon icon="material-symbols:arrow-circle-right" className="ar" /></button>
    </div>
    </>
);
};
export default Arrow;

