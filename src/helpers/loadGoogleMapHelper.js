import loadScript from 'load-script'

// <script async defer
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
//     </script>

const HOST = 'https://maps.googleapis.com/maps/api/js';
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const URL = `${HOST}?key=${KEY}&libraries=places`;

const loadGoogleMapApi = (
    success = () => {},
    error = () => {}
) => {
    if (window.google) {
        success();
    } else {
        loadScript(URL, err => {
            const callback = err ? error : success;
            callback();
        });
    }
};

export default loadGoogleMapApi;