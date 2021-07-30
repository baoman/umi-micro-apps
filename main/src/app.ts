import React, { useState } from 'react';
export function useQiankunStateForSlave() {
    const [masterState, setMasterState] = useState({
        token: 'absdvgaf123456'
    });

    return {
        masterState,
        setMasterState,
    };
}