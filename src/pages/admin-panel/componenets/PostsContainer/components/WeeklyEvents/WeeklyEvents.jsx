
const WeeklyEvents = () => {
    return (
        <div className="weekly-events">
            <div className="events-header">
                <h1>Weekly events</h1>
            </div>
            <div className="events-body">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Provider</th>
                            <th>Date</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={require('../../../../images/mid/1.jpg')} alt="" />
                            </td>
                            <td>
                                #12222
                            </td>
                            <td>99 Chestnut Hill Ave</td>
                            <td>Mahdi Kamali</td>
                            <td>7/9/2022</td>
                            <td className='green'>
                                <small> • Added For Sale</small>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WeeklyEvents
