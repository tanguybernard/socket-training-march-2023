import React, {useEffect, useState} from 'react';
import {getMedicalRecords, ResponseApiPost} from "../api/services/MedicalRecord";
import {Card} from "../components/Card/Card";
import folderImg from "../assets/folder.png";

const HomePage = () => {

    const [userName, setUserName] = useState('');
    const [medicalRecords, setMedicalRecords] = useState<Pick<ResponseApiPost, 'id'|'title'>[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const userName = localStorage.getItem('userName');
        if (userName) {
            setUserName(userName);
        }
    }, []);


    useEffect(() => {
        getMedicalRecords().then((actualData) => {
            setMedicalRecords(actualData);
            setError(null);
        })
            .catch((err) => {
                setError(err.message);
                setMedicalRecords([]);
            }).finally(() => {
            setLoading(false);
        });

    }, []);//first render




    return (
        <div>
            <h1>Hello, {userName} !</h1>

            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <ul className="cards">
                {medicalRecords.length > 0 &&
                    medicalRecords.map(({ id, title }) => (
                        <li className="cards__item" key={id}>
                            <Card title={title} description={"My Description"} imgUrl={folderImg}/>
                        </li>
                    ))}
            </ul>
        </div>

    );
};
export default HomePage;
