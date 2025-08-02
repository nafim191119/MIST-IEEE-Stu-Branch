import React from 'react';
import Banner from '../Banner/Banner';
import IEEEStuMem from '../IEEEStuMem/IEEEStuMem';
import Affiliations from '../Affiliations/Affiliations';
import MemberData from '../MemberData/MemberData';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IEEEStuMem></IEEEStuMem>
            <MemberData></MemberData>
            <Affiliations></Affiliations>
        </div>
    );
};

export default Home;