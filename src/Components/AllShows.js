import React from 'react';
import noimage from '../image/noImage';

const AllShows = ({obj}) => {
    return (
        <div>
            <div className="container">
              <div className="row">
              <div className="movie-item-style-2">
					<img src={obj.show.image? obj.show.image.medium: noimage} alt={obj.id} />
					<div className="mv-item-infor">
						<h6><a href="/">{obj.show.name} <span></span></a></h6>
                        <p className="describe">
                            {
                                obj.show.summary.replace(/<\/?[a-z]+>/gi, '').lenght < 100 ? `${obj.show.summary.replace(/<\/?[a-z]+>/gi, '')}` : `${obj.show.summary.replace(/<\/?[a-z]+>/gi, '').substring(0, 95)}......`
                            }
                        </p>
						<p className="run-time"> Genre: {obj.show.genres[0]} <span>{obj.show.genres[1]} </span><span>{obj.show.genres[2]}</span></p>
						<p>type: <a href="/">{obj.show.type}</a></p>
						<p>Language: <a href="/">{obj.show.language}</a></p>
					</div>
				</div>
              </div>
            </div>
        </div>
    );
};

export default AllShows;