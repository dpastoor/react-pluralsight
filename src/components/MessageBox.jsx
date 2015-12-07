import React from 'react';
import mui, {Card} from 'material-ui'

export default class MessageBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={{
            maxWidth: 1200,
            margin: '30px auto 30px',
            padding: 30
            }}>
                <textarea style={{
                    width: '100%',
                    borderColor: '#D0D0D0',
                    resize: 'none',
                    borderRadius: 3,
                    minHeight: 50,
                    color: '#555',
                    fontSize: 14,
                    // to prevent the textarea from being
                    // highlighted while you type
                    outline: 'auto 0px'
                }}/>
            </Card>
        )
    }
}


