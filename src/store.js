import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers'

let initialState = {
  issues: [
    {
      id: 247,
      author: "jcshah98",
      title: "Coffee machine not working",
      date: '2018-07-02',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis fermentum velit vel facilisis. Aenean ut odio id nulla tempor vulputate. Aenean rhoncus sem nec purus pellentesque, ut pharetra arcu aliquam. Ut vulputate libero vel lobortis vestibulum.",
      tags: [3],
      stars: 56
    },
    {
      id: 246,
      author: "kavishrox",
      title: "Client project overdue",
      date: '2018-07-01',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis fermentum velit vel facilisis. Aenean ut odio id nulla tempor vulputate. Aenean rhoncus sem nec purus pellentesque, ut pharetra arcu aliquam. Ut vulputate libero vel lobortis vestibulum.",
      tags: [0, 2],
      stars: 12
    },
    {
      id: 235,
      author: "chirag17",
      title: "A-wing server down",
      date: '2018-06-28',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis fermentum velit vel facilisis. Aenean ut odio id nulla tempor vulputate. Aenean rhoncus sem nec purus pellentesque, ut pharetra arcu aliquam. Ut vulputate libero vel lobortis vestibulum.",
      tags: [0, 4],
      stars: 6
    },
    {
      id: 236,
      author: "jcshah98",
      title: "New product launching soon",
      date: '2018-07-04',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis fermentum velit vel facilisis. Aenean ut odio id nulla tempor vulputate. Aenean rhoncus sem nec purus pellentesque, ut pharetra arcu aliquam. Ut vulputate libero vel lobortis vestibulum.",
      tags: [1, 2],
      stars: 72
    },
    {
      id: 222,
      author: "chirag17",
      title: "Bugs in new product",
      date: '2018-07-02',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis fermentum velit vel facilisis. Aenean ut odio id nulla tempor vulputate. Aenean rhoncus sem nec purus pellentesque, ut pharetra arcu aliquam. Ut vulputate libero vel lobortis vestibulum.",
      tags: [0, 4],
      stars: 2
    }
  ],

  details: [
    {
      id: 1,
      issueId: 235,
      color: "blue",
      type: "message",
      message: "I'll start working on it soon",
      author: "jcshah98",
      date: "2018-07-02"
    },
    {
      id: 2,
      issueId: 235,
      color: "red",
      type: "clock-circle-o",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "jcshah98",
      date: "2018-07-02"
    },
    {
      id: 3,
      issueId: 235,
      color: "blue",
      type: "edit",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis fermentum velit vel facilisis. Aenean ut odio id nulla tempor vulputate. Aenean rhoncus sem nec purus pellentesque, ut pharetra arcu aliquam. Ut vulputate libero vel lobortis vestibulum.",
      author: "jcshah98",
      date: "2018-07-02"
    },
    {
      id: 4,
      issueId: 235,
      color: "green",
      type: "check-circle-o",
      message: "Aenean rhoncus sem nec purus pellentesque, ut pharetra arcu aliquam. Ut vulputate libero vel lobortis vestibulum.",
      author: "jcshah98",
      date: "2018-07-02"
    },
    {
      id: 5,
      issueId: 235,
      color: "red",
      type: "close-circle-o",
      message: "I am closing this issue now.",
      author: "jcshah98",
      date: "2018-07-02"
    },
    {
      id: 2,
      issueId: 236,
      color: "red",
      type: "clock-circle-o",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "jcshah98",
      date: "2018-07-02"
    }
  ]
}

const store = createStore(reducers, initialState, composeWithDevTools());

export default store

