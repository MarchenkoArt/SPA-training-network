const profileReducer = (state, action) => {

    switch (action.type){
        case "ADD-POST":
            let newPost = {
                message: state.textPost
            }
            state.postData.push(newPost);
            return state;
        case "UPDATE-POST":
            state.textPost = action.newText;
            return state;
        default:
            return state;
    }
};

export default profileReducer;