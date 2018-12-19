const initialState = []

const details = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ISSUE_DETAIL':
    return [
      ...state,
      {
        id: action.id,
        issueId: action.issueId,
        detailType: action.detailType,
        message: action.message,
        author: action.author,
        date: action.date
      }
    ]
    default:
      return state
  }
}

export default details