import React from 'react';
import { Card, Checkbox, Button } from 'antd';
import { useState } from 'react';
const App = (props) => {
    const [checked, setChecked] = useState(false)

    function checkedly() {
        setChecked(prev => !prev)
    }
    return (
        <div>
            {props.arrTasks.map(item => (
                <Card style={{ width: 500, backgroundColor: checked ? 'rgb(169, 228, 151)' : '#f4f4f4', marginTop: '30px', border: checked ? '1px solid #72ee4c' : ''}}>
                    <p>{item}</p>
                    <Checkbox onChange={checkedly}>Выполнено</Checkbox>
                    <Button danger style={{marginLeft: '30px'}} onClick={() => props.deleteTask(item)}>
                        Удалить
                    </Button>
                </Card>
            ))}
        </div>
    )
};
export default App;