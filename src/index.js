import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

// Create a react component
const App = function ()  {

  return (<div className="ui container comments">
  <ApprovalCard>
<CommentDetail
  author="sandeep"
   timeago="yesterday"
  image = {faker.image.avatar()}
content = "this is good"
/>
</ApprovalCard>
  <ApprovalCard>
<CommentDetail author="sadhika" timeago="tmrw" image = {faker.image.avatar()}
content = "this is awesome" /></ApprovalCard>
<ApprovalCard>
<CommentDetail author="sandy" timeago="today" image = {faker.image.avatar()}
content = "this is bes"/></ApprovalCard>

  </div>);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
