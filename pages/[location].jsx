import { useRouter } from 'next/router'

const Location = () => {
  const router = useRouter()
  const { location } = router.query

  return <p>Location: {location}</p>
}

export default Location