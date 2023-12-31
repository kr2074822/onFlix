import { configureStore, createSlice } from '@reduxjs/toolkit'

const movieData = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {

    }
});


const search = createSlice({
    name: 'search',
    initialState: { value: '' },
    reducers: {
        searchQuery(state, action) {
            state.value = action.payload;
        },
        searchReset(state) {
            state.value = '';
        },
    }
});

export let { searchQuery, searchReset } = search.actions;

const login = createSlice({
    name: 'login',
    initialState: { value: false },
    reducers: {
        loginHandler(state) {
            state.value = !state.value;
        }
    }
});

export let { loginHandler } = login.actions;

const user = createSlice({
    name: 'user',
    initialState: {
        id: '',
        pw: ''
    },
    reducers: {
        userHandler(state, action) {
            state.id = action.payload.id;
            state.pw = action.payload.pw;
        }
    }
});

export let { userIdHandler, userPwHandler, userHandler } = user.actions


const resize = createSlice({
    name: 'resize',
    initialState: {
        width: window.innerWidth,
    },
    reducers: {
        resizeHandler(state, action) {
            state.width = action.payload.width;
        }
    }
});

export let { resizeHandler } = resize.actions;

const menuType = createSlice({
    name: 'menuType',
    initialState: {
        value: 'all'
    },
    reducers: {
        menuTypeHandler(state, action) {
            state.value = action.payload;
        }
    }
})

export let { menuTypeHandler } = menuType.actions;

const title = createSlice({
    name: 'title',
    initialState: {
        value: [
            'Movie Popular', 'Movie Now Play', 'Top Rated', 'Upcoming',
            'Tv Popular', 'Airing Today', 'Tv Top Rated', 'On The Air'
        ]
    },
});


export default configureStore({
    reducer: {
        movieData: movieData.reducer,
        search: search.reducer,
        login: login.reducer,
        user: user.reducer,
        resize: resize.reducer,
        menuType: menuType.reducer,
        title: title.reducer
    }
})