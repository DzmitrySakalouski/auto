import "./dashboard.css";

export const Dashboard = props => {
    const {tableData} = props;

    const getLeftData = () => {
        if (!tableData) return;
        const half = Math.trunc(tableData.length / 2)
        return tableData.slice(0, half);
    }

    const getRightData = () => {
        if (!tableData) return;
        const half = Math.trunc(tableData.length / 2)
        return tableData.slice(half, tableData.length);
    }

    if (!tableData) {
        return null;
    }

    if (tableData) {
        console.log(getLeftData());
        console.log(getRightData());
    }

    return (
        <div className="dashboard">
            <div className="dashboard_container">
                {getLeftData().map(item => 
                    <div key={item.id}>
                        <p>{item.displayName}</p>
                        {
                            item.offers.map(offer => (
                                <div className="offer_container">
                                    <div>{offer.displayName}</div>
                                    <div className="offer_price">{offer.price} byn</div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
            <div  className="dashboard_container">
                {getRightData().map(item => 
                    <div>
                        <p>{item.displayName}</p>
                        {
                            item.offers.map(offer => (
                                <div className="offer_container">
                                    <div>{offer.displayName}</div>
                                    <div className="offer_price">{offer.price} byn</div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}