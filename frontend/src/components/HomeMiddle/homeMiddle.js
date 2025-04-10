import React from "react";
import './homeMiddle.css'
import appetizerImage from "./Images/appetizer2.jpg";
import mainCourseImage from "./Images/main_course.jpg";
import dessertsImage from "./Images/desserts.jpg";


function HomeMiddle() {

    
    const foodData = [
        {
        id :1,
        title: "Appetizers",
        image: appetizerImage,
        description: [
            { text: "The term \"appetizers\" emerged almost simultaneously in England and America during the 1860s as a global equivalent to the French term “hors d'oeuvre.” By the 1890s, a fashionable supper might feature both appetizers and hors d'oeuvres." },
            { text: '"Hors d\'oeuvre" is a French term that translates to "outside the masterpiece," reflecting the French view of cuisine as an art form. Unlike the word "appetizer," which emphasizesn stimulating one’s appetite, "hors d\'oeuvre" carries a more nuanced meaning tied to culinary artistry.' },
            { text: "Appetizers are typically served as the first course of a multi-course meal and are designed to complement the main dish. Their purpose is to stimulate the appetite and buildanticipation for the courses that follow. Once served, appetizers signal the beginning of the meal and heighten the excitement for the main event." },
            { text: "Our appetizer recipes are perfect for parties, holidays, or just a fun night at home. From dips to finger foods, you'llfind something for everyone here." },
        ],
        },
      
        {
        id:2,
        title: "Main Courses",
        image: mainCourseImage,
        description: [
            { text: 'The main course, often referred to as the "entrée" in many cultures, is the central and most substantial dish in a meal, typically following appetizers or a starter. Its origins can be traced back to medieval feasts, where meals were served in multiple courses to showcase abundance and hospitality. The main course evolved as the highlight of the meal, featuring the most lavish and filling ingredients such as meats, fish, or hearty vegetarian dishes.' },
            { text: "Over time, as dining customs became more structured, the main course took its place as the focal point of a formal meal, often reflecting the cultural and culinary traditions of a region. For example, in French cuisine, the main course is meticulously paired with sides, while in other traditions, such as Italian or Indian cuisines, it may be accompanied by shared dishes like pasta, rice, or curries." },
            { text: "Today, the main course remains the centerpiece of dining, symbolizing nourishment and satisfaction, and is often tailored to celebrate the flavors and techniques unique to a culture or chef's style." },
            { text: "With our main course recipes, you can enjoy the most important meal of the day, packed with nutrition and essential resources. These hand-picked recipes are designed to let you spend more time at the dining table than in the kitchen." },
        ],
      },

        {
          id:3,
        title: "Desserts",
        image: dessertsImage,
          description: [
              { text: 'Desserts are the sweet finale to any meal, bringing joy and indulgence to the table. From rich, decadent treats to light and fruity delights, they are crafted to satisfy your cravings and leave a lasting impression on your taste buds.' },
                
              { text: 'The history of desserts dates back to ancient civilizations, where honey and fruits were used to create simple sweet treats. Over time, as sugar became more accessible, desserts evolved into more complex and varied forms, including cakes, pastries, and confections. In medieval Europe, desserts were often reserved for the wealthy, featuring exotic ingredients like spices and nuts.' },
               
              { text: 'During the Renaissance, the art of dessert-making flourished, with elaborate sugar sculptures and intricate pastries becoming popular at royal banquets. The Industrial Revolution brought about mass production of sweets, making them more accessible to the general public. Today, desserts are enjoyed worldwide, with each culture offering its unique take on sweet indulgences.' }, 
              { text: 'Desserts are the sweet finale to any meal, bringing joy and indulgence to the table. From rich, decadent treats to light and fruity delights, they are crafted to satisfy your cravings and leave a lasting impression on your taste buds.' },
        ],
      },
    ];
    return (
      <div>
        <div className="stories">
          <h2>Our food preferences</h2>

          {foodData.map((item) => (
            <div className="story" key={item.id}>
              <div className="appetizer">
                <img
                  className="img_appetizer"
                  src={item.image}
                  alt={item.title}
                />
                <div className="appetizer_text">
                  <h3 className="title">{item.title} </h3>
                  {item.description.map((line, index) => (
                    <p
                      key={index}
                      style={index % 4 === 3 ? { color: "#fb7d07" } : {}}>
                      {line.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default HomeMiddle;
