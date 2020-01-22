import React, { useState } from 'react';
import { getCurrentScreen } from '../helpers/Utils';



export function ComponentSwicher(props) {
    const screen = getCurrentScreen();
    if (screen === null || screen === undefined) {

        props.history.push("/");
        return;
    }

    switch (screen.toLowerCase()) {

        case "login":
            props.history.push("/login");
            break;

        case "dashboard":
            props.history.push("/dashboard");
            break;

        default:
            props.history.push("/");
            break;
    }

}


