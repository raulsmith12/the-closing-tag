import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoArchive = ({ archive }) => {
    const [showCard, setShowCard] = useState(false);

    return (
        <Card key={archive.id} className="py-2 px-2 my-2" bg="success" text="white">
            <Card.Header as="h4" role="button" onClick={() => setShowCard(!showCard)}>
                {archive.title}
            </Card.Header>
            <div className={showCard ? 'collapse show' : 'collapse'}>
                <Card.Body className="archive-card">
                    <Card.Text>
                        {archive.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="px-0">
                    <ReactPlayer url={archive.url} />
                </Card.Footer>
            </div>
        </Card>
    )
}

export default VideoArchive;