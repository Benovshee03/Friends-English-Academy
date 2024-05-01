import {
    AsyncThunk,
    PayloadAction,
    Slice,
    createSlice,
  } from "@reduxjs/toolkit";
  
  interface AsyncThunkConfig<TState, Returned, ThunkArg> {
    thunk: AsyncThunk<Returned, ThunkArg, {}>;
    onPending?: (state: TState) => void;
    onFulfilled?: (state: TState, action: PayloadAction<Returned>) => void;
    onRejected?: (state: TState, action: PayloadAction<any>) => void;
  }
  
  function createBaseSlice<TState>(
    name: string,
    initialState: TState,
    asyncThunks: AsyncThunkConfig<TState, any, any>[],
  ): Slice<TState> {
    return createSlice({
      name,
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        asyncThunks.forEach(({ thunk, onPending, onFulfilled, onRejected }) => {
          if (onPending) {
            builder.addCase(thunk.pending, (state: any) => {
              onPending(state);
            });
          }
          if (onRejected) {
            builder.addCase(thunk.rejected, (state: any, action) => {
              onRejected(state, action);
            });
          }
          if (onFulfilled) {
            builder.addCase(thunk.fulfilled, (state: any, action) => {
              onFulfilled(state, action);
            });
          }
        });
      },
    });
  }
  
  export default createBaseSlice;