
const SalesChart = () => {
    return (
        <div className="sales-chart">
            <div className="chart-header">
                <h1>Sales Analaytic</h1>
                <select name="test" id="">
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                    <option value="">Year</option>
                </select>
            </div>
            <div className="chart-body">
                <SalesChart />
            </div>
        </div>
    )
}

export default SalesChart
