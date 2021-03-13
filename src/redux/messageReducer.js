const messageReducer = (state, action) => {
    if (action.type === "ADD-MESSAGE") {
        let newMessage = {
            from: "me",
            message: state.textMessage
        }

        state.messagesList.push(newMessage);

    } else if (action.type === "UPDATE-MESSAGE") {
        state.textMessage = action.newText;
    }

    return state;
};

export default messageReducer;