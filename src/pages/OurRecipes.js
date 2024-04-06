import Footer from "../components/Footer";
import HeadingText from "../components/HeadingText";
import HeroRecipe from "../components/HeroRecipe";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeList";
import Newsletter from "../components/Newsletter";

const OurRecipes = () => {
  return ( 
    <>
      <Navbar/>
      <HeroRecipe/>     
      <HeadingText/>
      <RecipeList/>
      <Newsletter/>
      <Footer/>
    </>
   );
}
 
export default OurRecipes;