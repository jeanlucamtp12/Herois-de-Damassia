// Importe createSelector de '@reduxjs/toolkit'
import { createSlice, createSelector } from '@reduxjs/toolkit';

// Defina o tipo de estado
interface NomeState {
  nome: string;
  interruptor: boolean;
}



// Crie o slice
export const slice = createSlice({
  name: 'nome',

  initialState: {
    nome: '',
    interruptor: true
  } as NomeState, // Defina o tipo de estado aqui
  reducers: {
    changeNome(state, action) {
      state.nome = action.payload;
    },
    changeInterruptor(state, action){
      state.interruptor = action.payload;
    }
  }
});

// Exporte as actions e o reducer
export const { changeNome } = slice.actions;
export const { changeInterruptor } = slice.actions;

export default slice.reducer;

export const selectNome = (state: { nome: NomeState }) => state.nome.nome; 

export const selectInterruptor = (state: { interruptor: NomeState }) => state.interruptor.interruptor; 

// Use o createSelector para evitar cálculos desnecessários
export const selectUser = createSelector(selectNome, (nome) => nome);
