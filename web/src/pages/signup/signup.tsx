import React from 'react'
import './signup.css'

class Signup extends React.Component {
    // eslint-disable-next-line 
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className='Main'>
                <div className='signup'>
                    <div className='form'>
                        名字：<input />
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;