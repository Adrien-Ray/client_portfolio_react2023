import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import './index.css';
import './layout.css';
// import Layout from './components/layout/Layout.jsx';
import reportWebVitals from './reportWebVitals';

import ProjectList from "./components/ProjectList/ProjectList";


const root = ReactDOM.createRoot(document.getElementById('root'));

async function funcFetch(updatebrutData, brutData) {
    var url = 'https://portfolio.accesdenied.net/api/index.php';
    // var url = 'http://localhost/perso/domains-portfolio/api/';
    // var url = 'https://localhost/acs/domains-portfolio/api/index.php';
    var header = {
        mode: 'no-cors',
        method: "GET",
        header: {
            'Accept': 'application/json',
            'Content-Type': ' application/json'
        },
    };
    axios.get(url, header)
        .then(response => {
            console.log(response.data)
            updatebrutData(response.data)
        })
        .catch(error => console.error(error));
}

function Layout() {
    const [brutData, updatebrutData] = React.useState({});
    const [autherObj, updateAutherObj] = React.useState({});
    let testExistData = Object.keys(brutData).length;
    // console.log(testExistData);
    if (testExistData === 0) {
        // console.log('fetch launch ...');
        funcFetch(updatebrutData, brutData);
    } else {
        // console.log('le fetch a été effectuer');
        return(
            <div>
                <ProjectList brutData={brutData} autherObj={autherObj} updateAutherObj={updateAutherObj} />
            </div>
        )
    }
    return (
        <div>
            <h1>coucou!</h1>
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
