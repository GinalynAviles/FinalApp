let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Flavors To Try</div>
              </div>
            </div>

    <div className="list-group">
     <ul>
        <li><a href='#' onClick={process.thai}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Thai Milk Tea</div>
                  <div className="item-after">Try Me</div>
            </div>
          </div></a>
        </li>
          <li><a href='#' onClick={process.indian}>
           <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Indian Spiced Milk Tea</div>
                  <div className="item-after">Try Me</div>
            </div>
          </div></a>
        </li>
                 <li><a href='#' onClick={process.HK}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Hong Kong Milk Tea</div>
                  <div className="item-after">Try Me</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.milky}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Milky Bubble Tea</div>
                  <div className="item-after">Try Me</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.turme}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Turmeric Milk Tea</div>
                  <div className="item-after">Try Me</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.avoc}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Avocado Milk Tea</div>
                  <div className="item-after">Try Me</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.straw}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Strawberry Mango Bubble Tea</div>
                  <div className="item-after">Try Me</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.jas}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Green Jasmine Wintermelon Milk Tea</div>
                  <div className="item-after">Try Me</div>

            </div>
          </div></a>
        </li>

      </ul>
    </div>
        

</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  thai:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Thai Milk Tea</div>
              </div>
            </div>
            <center><img src={"img/thai.jpg"}/>
            <p>Thai Milk Tea</p>

</center>
            <ul>
              <li>Recipe</li>
              <br/>
              <li>2 tbsp. strong, loose-leaf black tea</li>
              <li>1 piece star anise</li>
              <li>2pods cardamon</li>
              <li>1 cup boiling water</li>
              <li>1/2 tbsp.sugar</li>
              <li>1/2 tbsp. sweetened condensed milk</li>
              <li>1 tbsp. evaporated milk(or coconut milk or whole milk)</li>
              <li>Garnish: Mint tea leaves </li>
              <br/>
              <li>Procedure</li>
              <li>01| Steep th tea and spices in boiling water for 5 mins.</li>
              <li>02| Strain the tea.</li>
              <li>03| Stir in the sugar and sweetened condensed milk until both are completely dissolved.</li>
              <li>04| Pour into glasses and drizzle with evaporated milk.</li>
              <li>05| Serve immediately.</li>
            </ul>
            <br/><a href='#' onClick={process.menu}>Back</a>
</div>
</div>
</div>
</div>
</div>
      ReactDOM.render(content,document.getElementById('root'));
  },
   indian:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Indian Spiced Milk Tea</div>
              </div>
            </div>
            <center><img src={"img/india.jpg"}/>
                     <p>Indian Spiced Milk Tea</p>

</center>
            <ul>
              <li>Recipe</li>
              <li>1 1/2 cups ice</li>
              <li>1 cup masala chai concentrate</li>
              <li>1/2 cup whole milk</li>
              <li>1-2 teaspoon good quality chocolate or white chocolate</li>
              <br/>
              <li>Procedure</li>
              <li>01| Combine all of the ingredients.</li>
              <li>02| Stir well or blend in a blender until smooth.</li>
            </ul>
            <br/><a href='#' onClick={process.menu}>Back</a>
</div>
</div>
</div>
</div>
</div>
      ReactDOM.render(content,document.getElementById('root'));
  },
  HK:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Hong Kong Milk Tea</div>
              </div>
            </div>
            <center><img src={"img/15.jpg"}/>
                     <p>Hong Kong Milk Tea</p>

</center>
            <ul>
              <li>Recipe</li>
              <li>2 tbsp. strong, loose-leaf black tea</li>
              <li>1 piece star anise</li>
              <li>2pods cardamon</li>
              <li>1 cup boiling water</li>
              <li>1/2 tbsp.sugar</li>
              <li>1/2 tbsp. sweetened condensed milk</li>
              <li>1 tbsp. evaporated milk(or coconut milk or whole milk)</li>
              <li>Garnish: Mint tea leaves </li>
              <br/>
              <li>Procedure</li>
              <li>01| Steep th tea and spices in boiling water for 5 mins.</li>
              <li>02| Strain the tea.</li>
              <li>03| Stir in the sugar and sweetened condensed milk until both are completely dissolved.</li>
              <li>04| Pour into glasses and drizzle with evaporated milk.</li>
              <li>05| Serve immediately.</li>
            </ul>
            <br/><a href='#' onClick={process.menu}>Back</a>
</div>
</div>
</div>
</div>
</div>
      ReactDOM.render(content,document.getElementById('root'));
  },
  milky:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Milky Bubble Tea</div>
              </div>
            </div>
            <center><img src={"img/14.jpg"}/>
            <p>Milky Bubble Tea</p>

</center>
            <ul>
              <li>Recipe</li>
              <li>1 cup tea (brewed; chinese black tea or lychee tea is good)</li>
              <li>1 cup milk (or to taste)</li>
              <li>4 ice cubes (as needed)</li>
              <br/>
              <li>For the Tapioca Pearls</li>
              <li>1 part tapioca pearls</li>
              <li>4 parts water (or more)</li>
              <br/>
              <li>For the syrup</li>
              <li>2 parts white sugar</li>
              <li>1 part brown sugar</li>
              <li>3 parts water</li>
              <br/>
              <li>Procedure</li>
              <li>01| Prepare the sugar syrup for the tapioca pearls.</li>
              <li>02| Prepare the tapioca pearls.</li>
              <li>03| Place 3 ounces tapioca pearls in the large glass jar.</li>
              <li>04| Allow the tea to cool to room temperature. Add milk.</li>
              <li>05| Add the sugar syrup, milk and tea mix and the ice cubes to a cocktail shaker.Shake well.</li>
              <li>06| Pour the shaken mixture into the glass with the tapioca pearls. Serve with a thick straw.</li>
            </ul>
            <br/><a href='#' onClick={process.menu}>Back</a>
</div>
</div>
</div>
</div>
</div>
      ReactDOM.render(content,document.getElementById('root'));
  },
  turme:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Turmeric Milk Tea</div>
              </div>
            </div>
            <center><img src={"img/17.jpg"}/>
            <p>Turmeric Milk Tea</p>

</center>
            <ul>
              <li>Recipe</li>
              <li>2 tbsp. ground turmeric</li>
              <li>1/4 cup water</li>
              <li>1 cup milk (or soy, or other non-dairy milk substitute)</li>
              <li>1 teaspoon almond oil</li>
              <br/>
              <li>Procedure</li>
              <li>01| Stir together the ground turmeric and water in a small saucepan.</li>
              <li>02| Bring to a simmer and allow to cook, stirring, until a thick paste is formed.</li>
              <li>03| Use 1/2 to 1 teaspoon of this turmeric paste for each cup of tea.</li>
              <li>04| Add turmeric paste, milk, almond oil and honey to saucepan and reduce heat to low.</li>
              <li>05| Bring milk just to a boil then remove from heat.</li>
              <li>06| Whisk briskly or blend if you prefer a frothier drink.</li>
            </ul>
            <br/><a href='#' onClick={process.menu}>Back</a>
</div>
</div>
</div>
</div>
</div>
      ReactDOM.render(content,document.getElementById('root'));
  },
  avoc:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Avocado Milk Tea</div>
              </div>
            </div>
            <center><img src={"img/avo.jpg"}/>
            <p>Avocado Milk Tea</p>

</center>
            <ul>
              <li>Recipe</li>
              <li>1 ripe avocado</li>
              <li>1 cup ice</li>
              <li>1/3 cup sweetened condensed milk</li>
              <li>1/4-1/2 cup milk</li>
              <br/>
              <li>Procedure</li>
              <li>01| Blend it all up! Run cold water over the bubbles and then place some in a glass and pour beverage on top.</li>
            </ul>
            <br/><a href='#' onClick={process.menu}>Back</a>
</div>
</div>
</div>
</div>
</div>
      ReactDOM.render(content,document.getElementById('root'));
  },
  straw:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Strawberry Mango Bubble Tea</div>
              </div>
            </div>
            <center><img src={"img/straw.jpg"}/>
            <p>Strawberry Milk Tea</p>

</center>
            <ul>
              <li>Recipe</li>
              <li>1/2 cup boba pearls</li>
              <li>1 cup frozen strawberries</li>
              <li>1 cup frozen mango</li>
              <li>1 cup almond milk</li>
              <br/>
              <li>Procedure</li>
              <li>Boil 2 cups of water in a medium pot. Swirl the water with a spatula while its boiling and add in the pearls. Cook 5-10 mins. Stirring occasionally. Drain pearls. Blend strawberries, mango and almond milk in blender. Spoon half of the pearls into a glass and top with the smoothie part. And enjoy!..</li>
            </ul>
            <br/><a href='#' onClick={process.menu}>Back</a>
</div>
</div>
</div>
</div>
</div>
      ReactDOM.render(content,document.getElementById('root'));
  },
  jas:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Green Jasmine Wintermelon Milk Tea</div>
              </div>
            </div>
            <center><img src={"img/12.jpg"}/>
            <p>Thai Milk Tea</p>

</center>
            <ul>
              <li>Recipe</li>
              <li>12 oz brewed green jasmine tea</li>
              <li>2 oz wintermelon syrup</li>
              <li>2 oz milk</li>
              <br/>
              <li>Procedure</li>
              <li>01| Pour 12 oz brewed green jasmine tea into a shaker cup.</li>
              <li>02| Add 2 oz wintermelon syrup.</li>
              <li>03| Shake for a minute or two to blend the tea and syrup.</li>
              <li>04| Pour into a glass or plastic drinking cup with ice.</li>
              <li>05| Add 2 oz milk.</li>
              <li>06| Stir with a green spoon or fat bubble tea straw.</li>
              <li>07| Enjoy your drink now.</li>
            </ul>
            <br/><a href='#' onClick={process.menu}>Back</a>
</div>
</div>
</div>
</div>
</div>
      ReactDOM.render(content,document.getElementById('root'));
  },
            
  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},1000);
