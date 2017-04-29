import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'

export function update_beach_details(beach_details) {
    return {
        type: 'update_mock_test_cover_details',
        beach_details
    }
}

