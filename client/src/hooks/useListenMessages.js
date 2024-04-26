import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";

import notificationSound from "../assets/sound/bell-notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			if (newMessage.senderId === selectedConversation._id){
				setMessages([...messages, newMessage]);
				newMessage.shouldShake = true;
			}
			const sound = new Audio(notificationSound);
			sound.play();
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;