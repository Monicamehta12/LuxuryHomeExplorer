import React from "react";

const MapComponent = ({ src, height = "365px", width = "100%" }) => {
  return (
      <iframe
        className="border-0 rounded-lg shadow-lg"
        src={src}
        height={height}
        width={width}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
};

export default MapComponent;
