/* eslint-disable import/prefer-default-export */
import React from "react";
import { WindowContext } from "./context";

export const withWindowConsumer = (Component) => {
    const WithWindowConsumer = (props) => (
        <WindowContext.Consumer>
            {(value) => <Component {...props} width={value.width} height={value.height} limit={value.limit} maxWidth={value.maxWidth}/>}
        </WindowContext.Consumer>
    );
    return WithWindowConsumer;
};
