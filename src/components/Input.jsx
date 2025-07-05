import React from 'react';
import { Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;


export default function TaskInput(props) {

    const [value, setValue] = useState('')

    function onSearch(v) {
        props.addTask(v);
        setValue('');
    }
    function onChange(e) {
        setValue(e.target.value)
    }
    return (
            <Search
            style={{width: 500}}
            placeholder="Добавить задачу"
            enterButton="Добавить"
            size="large"
            value={value}
            onChange={onChange}
            onSearch={onSearch}
            />
    )
}