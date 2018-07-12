import * as types from '../constants/ActionTypes';
import { clamp } from 'lodash';
const calcPages = (qty, ppp) => Math.ceil(qty / ppp);
const calcCurPage = (page, total) => clamp(page, 0, total - 1);

const initialState = {
  ppp: 2,
  currentPage: 0,
  friendsById: [
    {
      name: 'Xuyilary Clinton',
      sex: 'female',
      starred: false
    },
    {
      name: 'Donal Trump',
      sex: 'male',
      starred: true
    },
    {
      name: 'George Bush',
      sex: 'male',
      starred: true
    },
    {
      name: 'Theodore Roosevelt',
      sex: 'male',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      sex: 'male',
      starred: false
    },
    {
      name: 'Donal Trump',
      sex: 'male',
      starred: true
    },
    {
      name: 'George Bush',
      sex: 'male',
      starred: true
    },
    {
      name: 'Theodore Roosevelt',
      sex: 'male',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      sex: 'male',
      starred: false
    },
    {
      name: 'Donal Trump',
      sex: 'male',
      starred: true
    },
    {
      name: 'George Bush',
      sex: 'male',
      starred: true
    },
    {
      name: 'Theodore Roosevelt',
      sex: 'male',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      sex: 'male',
      starred: false
    },
    {
      name: 'Theodore Roosevelt',
      sex: 'male',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      sex: 'male',
      starred: false
    },
    {
      name: 'Donal Trump',
      sex: 'male',
      starred: true
    },
    {
      name: 'George Bush',
      sex: 'male',
      starred: true
    },
    {
      name: 'Theodore Roosevelt',
      sex: 'male',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      sex: 'male',
      starred: false
    }
  ]
};

initialState.pages = calcPages(initialState.friendsById.length, initialState.ppp);

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.SELECT_PAGE: {
      return {
        ...state,
        currentPage: calcCurPage(action.page, state.pages)
      };
    }

    case types.NEXT_PAGE: {
      return {
        ...state,
        currentPage: calcCurPage(state.currentPage + 1, state.pages)
      };
    }

    case types.PREV_PAGE: {
      return {
        ...state,
        currentPage: calcCurPage(state.currentPage - 1, state.pages)
      };
    }

    case types.ADD_FRIEND: {
      const friendsById = [
        ...state.friendsById,
        {
          starred: false,
          name: action.name,
          sex: action.sex
        }
      ];
      const pages = calcPages(friendsById.length, state.ppp);
      const currentPage = calcCurPage(state.currentPage, pages);
      return {
        ...state,
        currentPage,
        pages,
        friendsById,
      };
    }

    case types.DELETE_FRIEND: {
      const friendsById = state.friendsById.filter((item, index) => index !== action.id);
      const pages = calcPages(friendsById.length, state.ppp);
      const currentPage = calcCurPage(state.currentPage, pages);
      return {
        ...state,
        currentPage,
        pages,
        friendsById
      };
    }

    case types.STAR_FRIEND: {
      let friendsById = [...state.friendsById];
      let friend = friendsById.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById
      };
    }
    default:
      return state;
  }
}
