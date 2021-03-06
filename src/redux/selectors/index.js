import { createSelector } from "reselect";

// PROJECT
export const getProject = (state) => state.project;

export const getAudioUrl = createSelector(
  getProject,
  (project) => project.audioUrl
);

export const getAudioDuration = createSelector(
  getProject,
  (project) => project.duration
);

export const getAudioChunks = createSelector(
  getProject,
  (project) => project.audioChunks
);

export const getActiveChunk = createSelector(
  [getProject, getAudioChunks],
  (project, audioChunks) => {
    const blyat = audioChunks.find(
      (chunk) => chunk.id === project.activeChunkId
    );
    if (blyat) {
      return blyat;
    }
    return audioChunks[0];
  }
);

export const getLeftBarrier = createSelector(
  // TODO: handle error WHEN DELETING A MIDDLE CHUNK
  [getProject, getAudioChunks],
  (project, audioChunks) => {
    const leftChunk = audioChunks.find(
      (chunk) => chunk.id === project.activeChunkId - 1
    );
    if (leftChunk) {
      return leftChunk.end;
    }
    return 0;
  }
);

export const getRightBarrier = createSelector(
  // TODO: handle error WHEN DELETING A MIDDLE CHUNK
  [getProject, getAudioChunks],
  (project, audioChunks) => {
    const rightChunk = audioChunks.find(
      (chunk) => chunk.id === project.activeChunkId + 1
    );
    if (rightChunk) {
      return rightChunk.start;
    }
    return project.duration;
  }
);

export const getActiveChunkId = createSelector(
  getActiveChunk,
  (audioChunk) => audioChunk.id
);

export const getActiveChunkStartPoint = createSelector(
  getActiveChunk,
  (audioChunk) => audioChunk.start
);

export const getActiveChunkEndPoint = createSelector(
  getActiveChunk,
  (audioChunk) => audioChunk.end
);

export const getLyrics = createSelector(
  getActiveChunk,
  (audioChunk) => audioChunk.textParams.text
);

export const getLyricsCoordinate = createSelector(
  getActiveChunk,
  (audioChunk) => audioChunk.textParams.coordinate
);

// GLOBALS _________________________________________
export const getGlobals = (state) => {
  return state.globals;
};

export const getIsResizable = createSelector(
  getGlobals,
  (globals) => globals.isResizable
);

export const getCurrentLyrics = createSelector(
  getGlobals,
  (globals) => globals.currentLyrics
);

export const getShowLyrics = createSelector(
  getGlobals,
  (globals) => globals.showLyrics
);

export const getWidthInPercent = createSelector(
  getGlobals,
  (globals) => globals.widthInPercent
);

export const getWidthInPixels = createSelector(
  getGlobals,
  (globals) => globals.widthInPixels
);

export const getChunksActiveEdge = createSelector(
  getGlobals,
  (globals) => globals.chunksActiveEdge
);

export const getActiveChunkRef = createSelector(
  getGlobals,
  (globals) => globals.activeChunkRef
);
export const getAudioElement = createSelector(
  getGlobals,
  (globals) => globals.audio
);
