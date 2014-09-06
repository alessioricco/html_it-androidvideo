// http://developer.android.com/reference/android/provider/MediaStore.html#ACTION_VIDEO_CAPTURE

function onRecord() {

	// intent 
	var intent = Titanium.Android.createIntent({
		action : 'android.media.action.VIDEO_CAPTURE'
	});
	
	// start activity
	$.index.activity.startActivityForResult(intent, function(e) {
		if (e.resultCode == Ti.Android.RESULT_OK) {
			if (e.intent.data != null) {
				var videoURL = e.intent.data;
				// success e.intent.data contains the Video URI
				if (videoURL != null) {
					$.play.visible = true;
					// assign url to videoplayer
					$.player.url = videoURL;
				}
			} else {
				Ti.API.error('Error retrieving the video URI');
			}
		} else if (e.resultCode == Ti.Android.RESULT_CANCELED) {
			Ti.API.trace('recording was canceled');
		} else {
			Ti.API.error('error recording the video');
		}
	});
};

function onPlay() {
	// play recorded video
	$.player.play();
};

$.index.open();

