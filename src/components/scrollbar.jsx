import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
const Scrollbar = () => {
    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        setDisabled(checked);
    };
    return (
        <>
            <Slider range defaultValue={[20, 50]} disabled={disabled} />
            Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
        </>
    );
};
export default Scrollbar;