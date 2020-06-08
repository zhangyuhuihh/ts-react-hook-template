import { useSelector, shallowEqual } from 'react-redux'

interface RootState {
  auth: string[]
}
function HasPersimon(props: string): boolean {
  const authArr = useSelector((state: RootState) => state.auth, shallowEqual)
  return authArr.includes(props)
}

export default HasPersimon
