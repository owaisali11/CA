import { useState, useEffect } from 'react';


function PersonsPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getPersonsData();
    }, []);

    const contents = data == null
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item =>
                    <tr key={item.Id}>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <button>Weather Forecast List</button>

            <h1 id="tabelLabel">Persons List</h1>
            {contents}
        </div>
    );

    function getPersonsData() {
        fetch('https://localhost:7161/Person')
            .then((result) => {
                console.log(result);
                return result.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
            }).
            catch(ex => {
                console.log(ex);
            })
    }
}

export default PersonsPage;