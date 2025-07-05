import React from 'react';
import { Card, Checkbox, Button } from 'antd';
const App = (props) => {
    return (
        <div>
            {props.arrTasks.map(item => (
                <Card style={{ width: 500, backgroundColor: '#f4f4f4', marginTop: '30px'}}>
                    <p>{item}</p>
                    <Checkbox>Выполнено</Checkbox>
                    <Button danger style={{marginLeft: '30px'}} onClick={() => props.deleteTask(item)}>
                        Удалить
                    </Button>
                </Card>
            ))}
        </div>
    )
};
export default App;