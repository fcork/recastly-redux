import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (query) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    return searchYouTube({key:YOUTUBE_API_KEY, query}, function(videos){
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]))
    })
  }
};

export default handleVideoSearch;
