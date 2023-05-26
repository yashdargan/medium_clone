import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IDataItem } from "../Shared/Interfaces"
import { RootState } from "../store/blog"
interface IDataState {
  loading: boolean
  data: IDataItem[] | null
  error: string | null
}
const initialState:IDataState = {
  loading: false,
  data:null,
  error:null,
}
const dataSlice = createSlice({
  name:'data',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchData.pending,(state)=> {
      state.loading = true
      state.error= null
    })
    .addCase(fetchData.fulfilled,(state,action: PayloadAction<IDataItem[]>)=>{
      state.loading= false,
      state.data= action.payload
      state.error= null
    })
    .addCase(fetchData.rejected,(state,action: PayloadAction<string>)=>{
      state.loading = false,
      state.data = null,
      state.error = action.payload
    });
  },
})


export default dataSlice.reducer

export const fetchData =  createAsyncThunk('data/fetchData', async () => {
    const api = 'https://saurav.tech/NewsAPI/everything/cnn.json'
    try {
      const response = await axios.get(api)

      const data = response.data

      console.log(data)
    } catch (error) {
      console.log('Error:', error)
    }
  }
  )
export const selectData= (state:RootState)=>{state.data.data}
export const selectLoading= (state:RootState)=>{state.data.loading}
export const selectError= (state:RootState)=>{state.data.error}

















