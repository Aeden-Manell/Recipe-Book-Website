import Footer from "../components/Footer";
import HeroRecipe from "../components/HeroRecipe";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeList";


const OurRecipes = () => {
  return ( 
    <>
      <Navbar/>
      <HeroRecipe/>
      <RecipeList/>
      <Footer/>
    </>
   );
}
 
export default OurRecipes;