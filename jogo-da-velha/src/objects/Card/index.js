import React from 'react';
import './styles.css';


const Card = ({children}) => (
	<article className="card">
	    {children}
	</article>
);

export default Card;