import React, {useEffect, useState} from 'react';
import {getMedicalRecords, ResponseApiPost} from "../api/services/MedicalRecord";


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
            <ul>
                {medicalRecords.length > 0 &&
                    medicalRecords.map(({ id, title }) => (
                        <li key={id}>
                            <p>{title}</p>
                        </li>
                    ))}
            </ul>
        </div>

    );
};
export default HomePage;
