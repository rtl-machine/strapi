import { StrapiApp } from '@strapi/strapi/admin';
import React from 'react';

const handleClick = async (app:StrapiApp) => {

    alert("ok!");
};

export default {
    register(app:StrapiApp) {
        app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
            name: 'PreviewButton',
            Component: () => (
                <button style={{    width: "100%",
                    height: "3.2rem",
                    textDecoration: "none",
                    border: "1px solid #4945ff",
                    background: "#4945ff",
                    color: "#ffffff",
                    borderRadius: "0.4rem",
                    cursor: "pointer",
                }} onClick={()=>handleClick(app)}>Test</button>
            ),
        });
    },
};