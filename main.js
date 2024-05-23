const playList = {
  playListInfo: {
    title: "Hip-hop hits",
    coverImgUrl: "./img/title.jpg",
  },
  tracks: [
    {
      trackId: "1",
      artistName: "Eminem",
      trackTitle: "Rap God",
      trackFileUrl: "./music/Eminem_-_Rap_God.mp3",
      trackCoverImgUrl: "./img/eminem.jpg",
    },
    {
      trackId: "2",
      artistName: "50 cent",
      trackTitle: "In da Club",
      trackFileUrl: "./music/50_Cent_-_In_Da_Club.mp3",
      trackCoverImgUrl: "./img/50cent.jpg",
    },
  ],
};

function renderPlayList(anyPlayList) {
  renderPlayListHeader(anyPlayList.playListInfo);
  renderTracksList(anyPlayList.tracks);
}

function renderPlayListHeader(anyPlayListInfo) {
  const playListTitleElement = document.createElement("h1");
  playListTitleElement.innerText = anyPlayListInfo.title;
  document.body.append(playListTitleElement);

  const playListCoverElement = document.createElement("img");
  playListCoverElement.src = anyPlayListInfo.coverImgUrl;
  playListCoverElement.style.width = "150px";
  playListCoverElement.style.height = "150px";
  document.body.append(playListCoverElement);
}

function renderTracksList(anyTracks) {
  const trackListElement = document.createElement("ul");

  for (let i = 0; i < anyTracks.length; i++) {
    const trackElement = createTrack(anyTracks[i]);

    trackListElement.append(trackElement);
  }
  document.body.append(trackListElement);
}

function createTrack(anyTrack) {
  const trackElement = document.createElement("li");

  const trackCoverElement = document.createElement("img");
  trackCoverElement.src = anyTrack.trackCoverImgUrl;
  trackCoverElement.style.width = "50px";
  trackCoverElement.style.height = "50px";

  const audio = document.createElement("audio");
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;

  trackElement.append(trackCoverElement);
  trackElement.append(anyTrack.artistName + ": " + anyTrack.trackTitle);
  trackElement.append(audio);
  return trackElement;
}
renderPlayList(playList);
