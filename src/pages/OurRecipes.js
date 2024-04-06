import Footer from "../components/Footer";
import HeadingText from "../components/HeadingText";
import HeroRecipe from "../components/HeroRecipe";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeList";


const OurRecipes = () => {
  return ( 
    <>
      <Navbar/>
      <HeroRecipe/>     
      <HeadingText/>
      <RecipeList/>
      <Footer/>
    </>
   );
}
 
export default OurRecipes;