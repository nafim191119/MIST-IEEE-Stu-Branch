import React from 'react';
import Banner from '../Banner/Banner';
import IEEEStuMem from '../IEEEStuMem/IEEEStuMem';
import Affiliations from '../Affiliations/Affiliations';
import MemberData from '../MemberData/MemberData';
import Testimonial from '../Testimonial/Testimonial';
import MovingText from '../../../components/MovingText/MovingText';
import Events from '../Events/Events';
import WhyJoin from '../WhyJoin/WhyJoin';
import Vision from '../Vision/Vision';
import FeaturedEvents from '../FeaturedEvents/FeaturedEvents';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MovingText></MovingText>
            <WhyJoin></WhyJoin>
            <Vision></Vision>
            <FeaturedEvents></FeaturedEvents>
            <MemberData></MemberData>
            <IEEEStuMem></IEEEStuMem>
            
            <Testimonial></Testimonial>
            <Events></Events>
            <Affiliations></Affiliations>
        </div>
    );
};

export default Home;