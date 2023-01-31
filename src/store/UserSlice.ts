import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

type User={
    id: string,
    email: string,
    first_name: string,
    last_name : string,
    avatar: string
}

type PersonData = {
    data: User,
    support:{
        url:string,
        text: string
    }
}

type ListUser = {
    page: number,
    per_page: number,
    total: number,
    data: User[],
    personData: PersonData,
    loading: boolean
}



const initialState: ListUser = {
    page: null,
    per_page: null,
    total: null,
    data: [],
    personData: null,
    loading: false,
}



export const fetchUsers = createAsyncThunk<ListUser, unknown, { rejectValue: string}>(
    'userSlice/fetchUsers',
        async function(_, { rejectWithValue }) {
            const response =  axios('https://reqres.in/api/users?per_page=8&page=1');
            const userData = (await response).data
            if(!(await response).status) {
                return rejectWithValue('Server error')
            }

            return await userData;
        }
)

export const fetchPerson = createAsyncThunk<PersonData, string, { rejectValue: string}>(
    'userSlice/fetchPerson',
    async function (id:string, { rejectWithValue } ) {
        const response =  axios(`https://reqres.in/api/users/${id}`);
        const personData = (await response).data
        if(!(await response).status) {
            return rejectWithValue('Server error')
        }

        return await personData
    }
)

export const fetchLoadMore = createAsyncThunk<ListUser, number, { rejectValue: string} >(
    'userSlice/fetchLoadMore',
async function (num, { rejectWithValue } ) {
        const response =  axios(`https://reqres.in/api/users?per_page=4&page=${num}`);
        const userData = (await response).data
        if(!(await response).status) {
            return rejectWithValue('Server error')
        }

        return await userData;
}
)


const userSlice = createSlice({
name:"userSlice",
initialState,
reducers:{},
extraReducers(builder) {
    builder
    .addCase(
        fetchUsers.fulfilled, (state, action)=>{
        state.data = action.payload.data
        console.log(state);
    })
    .addCase(
        fetchPerson.pending, ( state )=>{
            state.loading = true
        }
    )
    .addCase(
        fetchPerson.fulfilled, (state, action)=>{
            state.personData = action.payload
            state.loading = false
            console.log(state.personData)
        }
    )
    .addCase(
        fetchLoadMore.fulfilled, (state, action)=>{
        state.data = [...state.data, ...action.payload.data];
        console.log(state.data);
    })
    
}, 

})


export default userSlice.reducer;


