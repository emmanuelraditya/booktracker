import React from 'react';
import Navbar from '../../components/Home/Navbar/Navbar';

const Library = () => {
return (
    <div>
        <Navbar />
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Library is a Computer Science portal for geeks.</h1>
	</div>
    </div>
);
};

export default Library;