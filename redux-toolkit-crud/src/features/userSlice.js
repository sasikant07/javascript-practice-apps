import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: ""
}

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', async (args, {rejectWithValue}) => {
    const response = await fetch(`http://localhost:4000/users`);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// export const getUserDetails = createAsyncThunk(
//     "users/getUserDetails",
//     async (id, {rejectWithValue}) => {
//         const response =  await fetch(`http://localhost:4000/users/${id}`);
//         try {
//             const result = await response.json();
//             return result;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

export const addUser = createAsyncThunk(
    "users/addUser",
    async (data, {rejectWithValue}) => {
        const response =  await fetch(`http://localhost:4000/users`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:4000/users/${id}`, {
            method: "DELETE",
        });
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (data, {rejectWithValue}) => {
        const response =  await fetch(`http://localhost:4000/users/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        });
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    extraReducers: (builder) => {
        // GET ALL USERS
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = ''
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message
        });
        // GET A SINGLE USER
        // builder.addCase(getUserDetails.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(getUserDetails.fulfilled, (state, action) => {
        //     state.loading = false;
        //     // state.users = state.users.filter((item) => item.id === action.payload.id);
        //     state.users = [action.payload];
        //     state.error = ''
        // });
        // builder.addCase(getUserDetails.rejected, (state, action) => {
        //     state.loading = false;
        //     state.users = [];
        //     state.error = action.error.message
        // });

        // ADD/POST NEW USER
        builder.addCase(addUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = [action.payload];
            state.error = ''
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message
        });

        // UPDATE/PUT AN EXISTING USER
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            // state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
            state.users = [action.payload];
            state.error = ''
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message
        });

        // DELETE  AN EXISTING USER
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter((user) => user.id !== action.payload.id);
            state.error = ''
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message
        });
    }
})

export default userSlice.reducer;