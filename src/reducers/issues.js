const initialState = []

const issues = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ISSUE':
    return [
      {
        id: action.id,
        author: action.author,
        title: action.title,
        date: action.date,
        body: action.body,
        tags: action.tags,
        stars: action.stars
      },
      ...state
    ]
    // console.log(state)
    // return state
    default:
      return state
  }
}

export default issues