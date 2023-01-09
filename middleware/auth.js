export default function ({ redirect }) {
  const token = localStorage.getItem('token')
  if (token === '' || token === null) {
    return redirect('/login')
  }
}


