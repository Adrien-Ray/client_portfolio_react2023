import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './layout.css';
// import Layout from './components/layout/Layout.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function funcFetch(updatebrutData) {
    console.log('il faut fetch');
    var url = 'https://portfolio.accesdenied.net/api';
    var header = {
        mode: 'no-cors',
        method: "GET",
        header: {
            /* 'Accept': 'application/json', */
            'Content-Type': ' application/json'
        },
    };
    fetch(url, header)
        .then(response => JSON.stringify(response.json()))
        .then(json => {
            console.log(json);
        })
}

function Layout() {
    const [brutData, updatebrutData] = React.useState({});
    let testExistData = Object.keys(brutData).length;
    console.log(testExistData);
    if (testExistData === 0) {
        funcFetch(updatebrutData);
    } else {
        console.log('le fetch a été effectuer');
    }
    return (
        <h1>coucou!</h1>
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