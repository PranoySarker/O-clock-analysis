import Barchart from '../Barchart/Barchart';
import Linechart from '../Linechart/Linechart';

const Dashboard = () => {

    return (
        <div>
            <h1 className='fw-bold text-left mb-5'>Dashboard</h1>
            <div className='dashboard'>
                <div className='d-flex justify-content-center align-items-center mb-5'>
                    <Barchart></Barchart>
                </div>
                <div className='pt-5 d-flex justify-content-center align-items-center mb-3'>
                    <Linechart></Linechart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;