// import React from 'react';
import StarRating from './StarRating';
import React, { useState } from 'react';
import './App.css';
import review1 from './images/IMG_7183.jpg';
import tribe1 from './images/IMG_7198.jpg';
import tribe2 from './images/IMG_7199.jpg';
import tribe3 from './images/IMG_7200.jpg';
import tribe4 from './images/IMG_7201.jpg';
import tribe5 from './images/IMG_7203.jpg';
import fatcake6 from './images/IMG_7197.jpg';
import review2 from './images/IMG_7205.jpg';
import review3 from './images/IMG_7215.jpg';
import clock from './images/orange-alarm.jpg';




const Tribe = () => {
    

    const [isHeartRed, setHeartRed] = useState(false);

    
  const toggleHeartColormain = () => {
    setHeartRed(!isHeartRed);
  };


    const toggleHeartColor = (index) => {
        setRelatedRecipes(prevRecipes => {
            const newRecipes = [...prevRecipes];
            newRecipes[index].heart = !newRecipes[index].heart;
            return newRecipes;
        });
    };

    const stepListRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // Add the 'animate' class to the steps when the '.step-list' element is in the viewport
            if (entry.isIntersecting) {
              stepListRef.current.querySelectorAll('.step').forEach(step => {
                step.classList.add('animate');
              });
            }
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
          }
        );
      
        if (stepListRef.current) {
          observer.observe(stepListRef.current);
        }
      
        // Clean up the observer when the component is unmounted
        return () => observer.disconnect();
      }, []);
      
    
      
      const reviews = [
        { photo: "https://media.licdn.com/dms/image/D4D03AQFFSjhCp4Irkg/profile-displayphoto-shrink_800_800/0/1695803206756?e=2147483647&v=beta&t=IEDW82asB2-SAlwUaoRZFNjUfSriu7MbTaHoWwOwvxs", name: "Rethabile Mohapi", date: "3 days ago", stars: "★★★★☆", message: "Easy qick and nice love it" },
        { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYyikPIGNM3wrZYtuFqo6EKv-F43_GwMo4JACDAFnAw&s", name: "Aeden Manel", date: "3 weeks ago", stars: "★★★☆☆", message: "Quick and profound methods " },
        { photo: "https://qph.cf2.quoracdn.net/main-thumb-95365177-200-bfdsjlwwtyodwczdbweikjhtorkkvmpp.jpeg", name: "Larreth Jimu", date: "1 Month ago", stars: "★★★★☆", message: "The Methods are easy to follow and quick " },
        { photo: "https://www.larrethgroup.com/wp-content/uploads/2022/06/1-150x150.png", name: "Mnelisi ", date: "3 Months ago ", stars: "★★★★☆", message: "I was hungry and I had all the ingredients , I made voetkoek and mince " },
      ];
    
      
      const [relatedRecipes, setRelatedRecipes] = useState([
        {image: fatcake6, name: 'Mince Meat', stars:4 ,viewers: 100, heart: false },    
        { image: review1, name: 'Chicken Feet', stars: 3, viewers: 200, heart: false },
        { image: review2, name: 'Creamy Stamp', stars: 5, viewers: 150, heart: <i className="fas fa-heart"></i> },
        { image: review3, name: 'Morogo(spinach', stars: 4, viewers: 120, heart: <i className="fas fa-heart"></i> },
       
      ]);
    
  return (
    <div className='body'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      <div className="navbar">
        <div className="navbar-logo">
          <a href="#logo">Logo</a>
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#testimony">Testimonials</a>
          <a href="#contact">Contact Us</a>
          {/* <input type="text" placeholder="Search" className="navbar-search"/> */}
        </div>
      </div>

            <div className="product-title">Tripe (Mala mogodu/ ulusu)</div>   
            
            <div className='stars'>
                <StarRating rating={4} />
                <p> 4 (99 reviews)</p>
                </div>   
                       
    <div className='icons'>
        <i className="fas fa-share-alt"> Share</i>
        <i className={`fas fa-heart ${isHeartRed ? 'red' : ''}`} 
          onClick={toggleHeartColormain}
        > Save</i>
      </div>

      <div className='image-grid'>
                <img src={tribe1} alt='big' className='big-image' />
            <img src={tribe2} alt='small-1' className='small-image' />
            <img src={tribe3} alt='small-2' className='small-image' />
            <img src={tribe5} alt='small-3' className='small-image' />
            <img src={tribe4} alt='small-4' className='small-image' />
            </div>
            <br></br>
            <div className='headings'>
           DESCRIPTION
           </div>
            <p className='descriptionsP'>Vetkoek is a traditional South African snack that can be made with both sweet or savoury fillings. <br></br>Bite through the crispy exterior of a freshly baked vetkoek into the soft goodness inside. <br></br>This is something every South African can identify with. This easy vetkoek recipe is simple to prepare and delicious.</p>
           
            {/* <br></br> */}
        <div className='headings'> INGREDIENTS</div>
        <br></br>
            <ul class="ingredients-list">
            <li><i class="fas fa-check-double"></i> 1 kg tripe,coarse salt, for sprinkling and soaking</li>
            <li><i class="fas fa-check-double"></i> 4 litres, watersalt and pepper, to taste</li>
            <li><i class="fas fa-check-double"></i>4 T ghee or vegetable oil</li>
            <li><i class="fas fa-check-double"></i> 1 medium onion, roughly chopped</li>
            <li><i class="fas fa-check-double"></i> 1 large red chilli, finely chopped</li>
            <li><i class="fas fa-check-double"></i> 1 t garlic, crushed</li>
            <li><i class="fas fa-check-double"></i> 2 t garam masala</li>
            <li><i class="fas fa-check-double"></i> 1 t paprika</li>
            <li><i class="fas fa-check-double"></i> 2 bay leaves</li>
            <li><i class="fas fa-check-double"></i> 1 x 400 g can chopped tomatoes</li>
            <li><i class="fas fa-check-double"></i> 2 t parsley, chopped, to garnishd</li>
          

            </ul>
            <br></br>
            <hr className="hr" />
            <br></br>
            <div className='headings'> METHODS </div>
            <br></br>
            <ol class="step-list" ref={stepListRef}>
            <li class="step">Step 1: Place the tripe in a large bowl.</li>
            <li class="step">Step 2: Sprinkle coarse salt all over the tripe and add half the water.</li>
            <li class="step">Step 3: Soak for about an hour, then rinse thoroughly under cold, running water.</li>
            <li class="step">Step 4: Cut the tripe into bite-sized pieces and place in a large saucepan with a lid. Season with salt and pepper and add the remaining water.</li>
            <li class="step">Step 5: Slowly bring it to a boil over a low heat and cook for 3 hours or until tender. Drain and set aside.</li>
            <li class="step">Step 6: Heat the ghee or oil in a large pan or skillet.</li>
            <li class="step">Step 7: Stir in the onion, chilli and garlic.</li>
            <li class="step">Step 8:  Add the masala, paprika and bay leaves. Season with salt and pepper, and stir through while cooking over low heat until the onion is cooked.</li>
            <li class="step">Step 9: Add the tomatoes, stir through, and cook for 2 minutes.</li>
            <li class="step">Step 10:  Add the amasi or yoghurt and stir through.The sauce should be thick by now, if not, cook over low heat until reduced.</li>
            <li class="step">Step 11:  Add the tripe and cook for about 10 minutes in the sauce.</li>
            <li class="step">Step 12: Garnish with fresh parsley and serve with a starch of your choice.</li>
            </ol>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr className="hr" />
            <br></br>
            <div className='headings'> REVIEWS  </div>  
            <div className='starsrev'>★ (99 review) </div> 
            {/* <div>see more </div> */}
            <br></br>
            <br></br>
            <div className="reviews-grid">
                {reviews.map((review, index) => (
                <div key={index} className="review">
                    <div className="review-header">
                    <img src={review.photo} alt={review.name} className="review-photo" />
                    <div className="review-info">
                        <div className="review-name">{review.name}</div>
                        <div className="review-date">{review.date}</div>
                        <div className="review-stars">{review.stars}</div>
                    </div>
            </div>
            <div className="review-message">{review.message}</div>
          </div>
        ))}
      </div>
      <br></br>
      <hr className="hr" />
      <br></br>
            <div className='headings'>RELATED RECIPES </div>
            <br></br>
            <br></br>
                    <div className="related-recipes">
                {relatedRecipes.map((recipe, index) => (
                    <div key={index} className="recipe">
                    <div className="recipe-name">{recipe.name}</div>

                    <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                    <div className="recipe-info">
                        <i className={`fas fa-heart ${recipe.heart ? 'red' : ''}`} onClick={() => toggleHeartColor(index)} />
                        <div className='starsreview'><StarRating rating={recipe.stars} /></div>
                        <div className="recipe-viewers">{recipe.viewers} viewers</div>
                     
                    </div>
                    </div>
                ))}
                </div>

    <hr className="hr" />
                                <br></br>
                                        <br></br>
                                <div className="subscribe">
                            <p>LEAVE A REVIEW </p>
                            <input placeholder="Your review" className="subscribe-input" name="text" type="text" />
                            <br />
                            <div className="submit-btn">SUBMIT</div>
                            </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="image-container">
                            <img src={clock} alt='clock'  className='clock'/>
                            <p>45 min</p>
                            </div>



 </div>
  );
}

export default Tribe;