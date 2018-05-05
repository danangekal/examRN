const initialState = {
    profiles: [],
    isLoading: false,
    isSaved: false,
    isError: false
  }
  
  const profilesReducer = function(state=initialState, action){
    switch (action.type) {
      case 'ALL_PROFILES':
        return { ...state, profiles: action.payload }
      case "ALL_PROFILES_PENDING":
        return {...state, isLoading: true}
      case "ALL_PROFILES_FULFILLED":
        return {...state, profiles: action.payload.data, isLoading: false}
      case "ALL_PROFILES_REJECTED":
        return {...state, isLoading: false, isError: true}
      case "CREATE_PROFILES_FULFILLED":
        return {...state, isSaved: true}
      case "CREATE_PROFILES_REJECTED":
        return {...state, isError: true}
      case "CREATE_PROFILES_PENDING":
        return {...state, isLoading: true}
      default:
        return state
    }
  }
  
  export default profilesReducer