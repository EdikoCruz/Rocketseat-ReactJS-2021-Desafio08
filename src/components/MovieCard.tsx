import { memo } from 'react';
import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCardComponent(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MovieCard = memo(MovieCardComponent, (previousProps, nextProps) => {
  if (previousProps.title !== nextProps.title) { return false }
  if (previousProps.poster !== nextProps.poster) { return false }
  if (previousProps.rating !== nextProps.rating) { return false }
  if (previousProps.runtime !== nextProps.runtime) { return false }

  return true
})