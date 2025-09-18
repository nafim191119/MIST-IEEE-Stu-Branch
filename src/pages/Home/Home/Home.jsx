import React from 'react';
import Banner from '../Banner/Banner';
import Affiliations from '../Affiliations/Affiliations';
import MemberData from '../MemberData/MemberData';
import Testimonial from '../Testimonial/Testimonial';
import MovingText from '../../../components/MovingText/MovingText';
import WhyJoin from '../WhyJoin/WhyJoin';
import Vision from '../Vision/Vision';
import FeaturedEvents from '../FeaturedEvents/FeaturedEvents';
import News from '../News/News';
import Blogs from '../Blogs/Blogs';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MovingText></MovingText>
            <WhyJoin></WhyJoin>
            <Vision></Vision>
            <FeaturedEvents></FeaturedEvents>
            <MemberData></MemberData>
            {/* <IEEEStuMem></IEEEStuMem> */}
            <News></News>
            <Blogs></Blogs>
            {/* <Events></Events> */}
            <Testimonial></Testimonial>
            <Affiliations></Affiliations>
        </div>
    );
};

export default Home;