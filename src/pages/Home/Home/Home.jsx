import React from 'react';
import Banner from '../Banner/Banner';
import IEEEStuMem from '../IEEEStuMem/IEEEStuMem';
import Affiliations from '../Affiliations/Affiliations';
import MemberData from '../MemberData/MemberData';
import Testimonial from '../Testimonial/Testimonial';
import MovingText from '../../../components/MovingText/MovingText';
import Events from '../Events/Events';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MovingText></MovingText>
            <IEEEStuMem></IEEEStuMem>
            <MemberData></MemberData>
            <Testimonial></Testimonial>
            <Events></Events>
            <Affiliations></Affiliations>
        </div>
    );
};

export default Home;