// export default {
//   middleware({ redirect }) {
//     const token = localStorage.getItem('token')
//     // 비로그인이며 로그인하라고
//     if (!token) {
//       return redirect('/login')
//     }
//   },
// }

export default function ({ redirect }) {
  const token = localStorage.getItem('token')
  if (token === null) {
    return redirect('/login')
  }
}
