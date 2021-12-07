import React from 'react';
import ReactDom from 'react-dom';
import faker, { lorem } from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail imgSrc={faker.image.avatar()} author="Sam" time="9am" text="Awesome Blog" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail imgSrc={faker.image.avatar()} author="Alex" time="11pm" text="Great Keep Going ^_^" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail imgSrc={faker.image.avatar()} author="Jane" time="8pm" text="Awesome" />
			</ApprovalCard>
		</div>
	);
};

ReactDom.render(<App />, document.getElementById('root'));
