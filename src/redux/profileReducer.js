const profileReducer = (state, action) => {

    if (action.type === "ADD-POST") {
        let newPost = {
            message: state.textPost
        }
        state.postData.push(newPost);

    } else if (action.type === "UPDATE-POST") {
        state.textPost = action.newText;
    }

    return state;
};

export default profileReducer;