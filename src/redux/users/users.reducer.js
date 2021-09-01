const initialState = [
  { name: 'Daniel' },
  { name: 'Douglas' },
  { name: 'Catia' }
]

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    default:
      return state;
  }
}
