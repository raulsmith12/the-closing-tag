import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import AudioArchive from '../components/AudioArchive';
import VideoArchive from '../components/VideoArchive';

const Archives = () => {
    const [audios, setAudios] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('https://theclosingtag.com/backend/public/api/archives')
            .then((response) => {
                setAudios(response.data.data.reverse());
            })
            .catch((error) => {
                console.log(error)
            })
        axios.get('https://theclosingtag.com/backend/public/api/videos')
            .then((response) => {
                setVideos(response.data.data.reverse());
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Row>
                <Col className="col-6">
                    <h3 className="display-4">Audio Archives</h3>
                    {audios.map(i => (
                        <AudioArchive archive={i} />
                    ))}
                </Col>
                <Col className="col-6">
                    <h3 className="display-4">Video Archives</h3>
                    {videos.map(i => (
                        <VideoArchive archive={i} />
                    ))}
                </Col>
            </Row>
        </div>
    )
}

export default Archives;