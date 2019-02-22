import React from "react";

const GoogleMap = ({ value }) => {
  const regex = /^<iframe src="(\S*)".*/;
  const srcMatch = value.match(regex);
  const src = srcMatch[1];

  return src ? (
    <div>
      <h2>Where is it?</h2>
      <iframe
        className="GoogleMap"
        title="Google Map"
        src={src.replace(/&#39;/gi, "'")}
        width="600"
        height="450"
        frameBorder="0"
      />
    </div>
  ) : null;
};

export default GoogleMap;
