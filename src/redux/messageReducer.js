const messageReducer = (state, action) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {
                from: "me",
                message: state.textMessage
            }
            state.messagesList.push(newMessage);
            return state;
        case "UPDATE-MESSAGE":
            state.textMessage = action.newText;
            return state;
        default: return state;
    }
};

export default messageReducer;