export const GOOGLE_FETCH ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+process.env.REACT_APP_YOUTUBE_API;
export const YOUTUBE_SEARCH = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const LIVE_VIDEO="https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=snippet%2CcontentDetails%2Cstatus&broadcastStatus=active&broadcastType=all&key="
export const LIVE_CHAT_COUNT=25;