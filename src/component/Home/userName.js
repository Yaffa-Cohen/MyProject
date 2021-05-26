import React, { useState } from 'react';

const UserName = () => {
    const [name, setName] = useState('null');
    return <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
            {name}     שלום
            הרשמתך נקלטה בהצלחה
            <br/>
        </div>

    </div>
}

export default UserName;