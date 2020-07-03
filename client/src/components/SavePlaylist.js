import React from 'react'
import { Typography, Input, Button} from 'antd';

const {Title} = Typography;

export default function SavePlaylist(props) {
    return (
       <div className="rounded-component" style={{padding: '1em', textAlign: 'center' }}>
           <Title level={3} align='center'>
               Save Playlist
           </Title>

           <Input className="rounded" size="large" value={props.name} onChange={({ target: { value } }) => props.setName(value)}/>
           <Button type="primary" shape="round" size="large" onClick={props.saveHandler} style={{marginTop: '1em'}}>Save</Button>
       </div>
    )
}
