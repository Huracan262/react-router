import {Link, useLocation, useNavigate} from 'react-router-dom'
import courses from '../data/courses'
import queryString from 'query-string'
import {useState, useEffect} from 'react'

const SORT_KEYS = ['title', 'slag', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => a[key] > b[key] ? 1 : -1)

  return sortedCourses
}

function Courses() {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(('.'))
      setSortKey()
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>Courses{sortKey && ` sorted by ${sortKey}`}:</h1>
      <ul> {sortedCourses.map(course => (
        <li key={course.id}>
          <Link className="courses-link" to={course.slug}>{course.title}</Link>
        </li>))}
      </ul>
    </>
  )
}

export default Courses