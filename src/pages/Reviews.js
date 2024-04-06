import Footer from "../components/Footer";
import HeroReviews from "../components/HeroReviews";
import LeaveReviewForm from "../components/LeaveReviewForm";
import Navbar from "../components/Navbar";
import OurReviews from "../components/OurReviews";


const Reviews = () => {
    return ( 
        <>
            <Navbar/>
            <HeroReviews/>
            <OurReviews/>
            <LeaveReviewForm/>
            <Footer/>
        </>
     );
}
 
export default Reviews;