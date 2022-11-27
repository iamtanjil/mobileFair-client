import React from 'react';

const FeedbackData = ({feedback, i}) => {
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{feedback.userName}</td>
            <td>{feedback.email}</td>
            <td>{feedback.subject}</td>
            <td>{feedback.message}</td>
        </tr>
    );
};

export default FeedbackData;