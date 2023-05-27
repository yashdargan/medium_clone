import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IDataItem } from '../Shared/Interfaces'
import { RootState } from '../store/blog'
interface IDataState {
  loading: boolean
  data: IDataItem
  error: string
}
const initialState: IDataState = {
  loading: false,
  data: {
    articles: [
      {
        source: {
          id: '',
          name: '',
        },
        author: '',
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: '',
        content: '',
      },
    ],
  },
  error: '',
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const api = 'https://saurav.tech/NewsAPI/everything/cnn.json'

  const response = await axios.get(api)

  return response?.data
})
const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<IDataItem>) => {
          state.loading = false
          state.data.articles = action.payload.articles
          state.error = ''
        }
      )
      .addCase(fetchData.rejected, (state) => {
        state.loading = false
        state.error = 'something went wrong'
      })
  },
})

export default dataSlice.reducer

export const selectData = (state: RootState) => state.data.data
export const selectLoading = (state: RootState) =>  state.data.loading

export const selectError = (state: RootState) =>   state.data.error

