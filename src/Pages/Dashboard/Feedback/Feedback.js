import { useQuery } from '@tanstack/react-query';
import FeedbackData from './FeedbackData';

const Feedback = () => {
    const { data: feedback = [] } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/feedback')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='p-7'>
            <h2 className='text-3xl'> Total Message: {feedback.length}</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feedback.map((feed, i) => <FeedbackData
                            key={feed._id}
                            feedback={feed}
                            i={i}
                            ></FeedbackData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Feedback;