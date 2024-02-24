import React, { FC } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface VideoProps {
    videoKey: string;
    videoName: string;
}

const MovieTrailers: FC<VideoProps> = ({ videoKey, videoName }) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="border border-primary border-2 rounded-lg shadow-lg" style={{ width: "600px", height: "338px" }}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoKey}`}
                    title={videoName}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>
        </div>
    );
};

export { MovieTrailers };
