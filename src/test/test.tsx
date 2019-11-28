import React from 'react'
import TestName from './TestName'


const Test: React.FC = () => {
        return <div>
            {/* passing required data to component which are specified
            in interface of component*/}
            <TestName name='John' data={{date: 4, auth: false}} 
            handleChange={e => {
                e.preventDefault();
            }}
            />
        </div>;
}

export default Test;