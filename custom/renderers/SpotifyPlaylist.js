import React from "react";

const SpotifyPlaylist = ({ value }) => {
  const uriRegex = /^spotify:(\w+):(\w+)$/;
  const linkRegex = /https:\/\/open.spotify.com\/(\w+)\/(\w+)/;

  const uriMatch = value.match(uriRegex);
  const linkMatch = value.match(linkRegex);
  const srcMatch = uriMatch || linkMatch;
  const resourceType = srcMatch[1];
  const resourceId = srcMatch[2];
  const src = `https://open.spotify.com/embed/${resourceType}/${resourceId}`;
  return (
    <div>
      <iframe
        className="SpotifyPlaylist"
        title="Spotify Playlist"
        src={src}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
};

export default SpotifyPlaylist;
