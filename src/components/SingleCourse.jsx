import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';

function SingleCourse() {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find(course => course.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  if (!course) {
    return null;
  }

  return (
    <>
      <Link style={{ color: 'tomato' }} to=".." relative="path">Назад епта</Link>
      <h2>Курс по {course.slug}</h2>
    </>
  );
}

export default SingleCourse;

