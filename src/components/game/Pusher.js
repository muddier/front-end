import {useEffect} from 'react';
import {usePrevious} from '../utils/usePrevious';
import Pusher from 'pusher-js';

const pusher = new Pusher('0eed8913739ddced563b', {
    cluster: 'us2',
    forceTLS: true
});

const PusherSubscription = ({ roomId, setChat }) => {

	const prevRoomId = usePrevious(roomId);

	useEffect(() => {        
		if(prevRoomId !== roomId){
			pusher.unsubscribe(`room-${prevRoomId}`)
		}
    
        let channel = pusher.subscribe(`room-${roomId}`);
        
        channel.bind('broadcast', data => {
            setChat(oldData => [...oldData, data ])
        });

		return () => pusher.unsubscribe(`room-${roomId}`)
	// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId])
	
	return null
}

export default PusherSubscription