import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import './index.css';
import './layout.css';
// import Layout from './components/layout/Layout.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function funcFetch(updatebrutData, brutData) {
    console.log('il faut fetch');
    // var url = 'https://portfolio.accesdenied.net/api/index.php';
    var url = 'http://localhost/perso/domains-portfolio/api/';
    var header = {
        mode: 'no-cors',
        method: "GET",
        header: {
            'Accept': 'application/json',
            'Content-Type': ' application/json'
        },
    };
    /* var header = {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    } */
    axios.get(url, header)
        .then(response => {
            console.log(response.data)
            updatebrutData(response.data)
        })
        .catch(error => console.error(error));
}

function Layout() {
    const [brutData, updatebrutData] = React.useState({});
    let testExistData = Object.keys(brutData).length;
    console.log(testExistData);
    if (testExistData === 0) {
        console.log(funcFetch(updatebrutData, brutData));
        console.log('fetch');
    } else {
        console.log('le fetch a été effectuer');
    }
    return (
        <div>
            <h1>coucou!</h1>
            {/* <p>{brutData}</p> */}
        </div>
    )
}

root.render(
    <React.StrictMode >
        <Layout />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();