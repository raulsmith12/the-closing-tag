import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioArchive = ({ archive }) => {
    const [showCard, setShowCard] = useState(false);

    return (
        <Card key={archive.id} className="py-2 px-2 my-2" bg="success" text="white">
            <Card.Header as="h4" role="button" onClick={() => setShowCard(!showCard)}>
                The Closing Tag, Ep. {archive.episode_no}: {archive.title}
            </Card.Header>
            <div className={showCard ? 'collapse show' : 'collapse'}>
                <Card.Body className="archive-card">
                    <Card.Text>
                        {archive.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <AudioPlayer src={archive.url} layout="horizontal" />
                </Card.Footer>
            </div>
        </Card>
    )
}

export default AudioArchive;