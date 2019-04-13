// Action creator
export const selectSong = function (song) {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
