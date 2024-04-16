document.addEventListener('DOMContentLoaded', function() {
  var backButton = document.getElementById('back');

  backButton.addEventListener('click', function() {
      console.log('Button clicked'); // Check if the button click event is triggered
      window.location.href = '../home/second.html'; // Replace with the correct file path
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const redDot = document.getElementById('red-dot');

  
  document.addEventListener('mousemove', function(event) {
      redDot.style.left = (event.clientX - redDot.offsetWidth / 2) + 'px';
      redDot.style.top = (event.clientY - redDot.offsetHeight / 2) + 'px';
  });
});
document.addEventListener("DOMContentLoaded", function() {
     
    // Array of data for grid items
    const gridData = [
      { imageSrc: "favs/1.png", title: "HOBBY", description: "Cooking!", additionalDescription: "I consider myself a hard-core foodie. Lets say that I wake up every day excited because I get to eat breakfast soon. This deep-rooted love has naturally led me to the heart of the kitchen, where I find my true joy in cooking. I have come to realize that the more effort I put in a meal, the more satisfied I am once I get to enjoy it. I absolutely love the idea of combining a bunch of ingredients to create distinct flavors. I truly don't think there's anything I enjoy more than food." },
      { imageSrc: "favs/2.png", title: "TYPE FOUNDRY", description: "ABC DINAMO", additionalDescription: "I came across ABD Dinamo recently and downloaded several of their trial fonts. After looking through their website, what caught my attention is the type foundry's dedication to experimentation and exploration. From intricate serif designs to bold and expressive sans-serifs, each font exudes a distinct personality and character, reflecting the studio's passion for creativity and originality. After doing some more research, I can say that perhaps what truly makes ABC Dinamo stand out is its ethos of collaboration and community. By actively engaging with designers, artists, and typographers from around the world, the foundry fosters a vibrant ecosystem of creativity and exchange, inspiring others to push the boundaries of typography alongside them." },
      { imageSrc: "favs/3.jpeg", title: "HAPPY PLACE", description: "The beach", additionalDescription: "I spent the second half of my childhood by the shores of Key Biscayne, a small island off the coast of Miami, FL. A large number of my most valuable memories take place on this beach, making it one of the most highly ranked places in my head. When someone asks me to think of a happy place, this is the first place my mind goes to. " },
      { imageSrc: "favs/4.jpg", title: "TYPEFACE", description: "Helvetica", additionalDescription: "I find helvetica so clean and versatile. Some may argue that it’s simple or boring, but I believe it goes with everything. Every time I’m designing something, I have to push myself to not go back to using Helvetica again (just for the sake of exploring other fonts). Plus, it's so easy on the eyes, you could read it for days without getting tired. It's like the classic white tee of fonts – simple, timeless, and always looks good." },
      { imageSrc: "favs/5.jpeg", title: "DRINK", description: "Anything Cha Cha Matcha", additionalDescription: "They say living in New York is expensive. And I think this is mainly true because of all the Cha Cha Matcha locations available near you. This place is my heaven. When I am fortunate enough to treat myself to a matcha, it automatically makes my day so much better. At the moment, my favorite thing on the menu is the blue drink with an extra shot of matcha. It is so fucking good. Whenever I order one, I genuinely enjoy every single sip I take, and once I’m done with it I immediately wish I could order a second one. I think Cha Cha Matcha is one of the things I miss the most about New York City when I leave. " },
      { imageSrc: "favs/10.jpg", title: "BOOK", description: "Viven!", additionalDescription: "'Alive' by Piers Paul Read is my favorite book for its gripping narrative and profound exploration of the human spirit in the face of adversity. It’s based on the true story of the 1972 Andes flight disaster; the book recounts the harrowing ordeal of a Uruguayan rugby team stranded in the remote Andes Mountains after their plane crashes. What unfolds is a tale of survival against all odds, as the survivors battle with the worst imaginable conditions of extreme temperatures, hunger, and isolation. However, what truly sets 'Alive' apart is its portrayal of the resilience, courage, and solidarity displayed by the survivors as they confront unimaginable challenges. Through its vivid storytelling and reflections on the human condition, this inspiring story serves as a reminder of the strength of the human spirit and the power of hope in the face of despair." },
      { imageSrc: "favs/7.jpg", title: "MOVIE", description: "Back to the Future", additionalDescription: "I think the main reason why Back to the Future is my favorite movie is because it’s my dad’s favorite. I have so many memories of my brother and I watching it with him, and vividly remember my dad’s enthusiasm and excitement for every scene. He transferred this admiration to me, and it made it my number one comfort movie. I will always feel better after watching it. " },
      { imageSrc: "favs/8.jpg", title: "HOME", description: "My grandparent's house in Buenos Aires", additionalDescription: "I know I said that my happy place was the beach. But I kinda lied. Or I have two happy places in the world. My grandparent’s house in Buenos Aires is the place where I feel most at home. It’s where I spent the earliest years of my childhood and where I have spent most of my summers. This house is where I have experienced the best moments with my family and where I can feel my grandma’s presence the most. It’s where you will always find me with a smile on my face." },
      { imageSrc: "favs/9.png", title: "DESIGN LECTURE", description: "Core Studio Public Lecture: Virgil Abloh, “Insert Complicated Title Here”", additionalDescription: "I thought the whole presentation was very interesting and useful to hear as a young designer. By sharing his experiences, Virgil gave a lot of useful advice and tips on how to find yourself as a designer. I liked how he started the presentation mentioning brand DNA and how the first step in the process is finding your signature and artist DNA. As soon as he said this I thought to myself, how does one do this? I have always tried to approach my signature with an artistic point of view, so it was interesting when he explained that a way of finding your DNA is to go back to your earliest memories and analyze how you organized something; your rationale before you actually learned how to do something. I had never approached it this way, and I thought it was a very smart way of thinking about it, since being an artist isn’t all about visual portrayals, there is much more behind that. Another piece of advice I found very useful was when he mentioned that we shouldn’t be pressuring ourselves to come up with the next avant-garde design of our time. Virgil explained, “we exist off the backs of many things and iterations that came before us.” This made me think how a good way to exist within the design world is to coexist." },
      { imageSrc: "favs/6.png", title: "BOOK...AGAIN", description: "'Unreasonable Hospitality' by Will Guidara", additionalDescription: "'Unreasonable Hospitality' is a concept at the heart of Will Guidara's book that flips the script on traditional notions of service. Instead of merely meeting expectations, unreasonable hospitality is about exceeding them in unexpected and meaningful ways. Guidara believes that hospitality isn't just about delivering a service; it's about creating memorable experiences that leave a lasting impression on guests. As he explains in his book, “service is black and white; hospitality is color. Black and white means you’re doing a job with competence and efficiency, while color means you make people feel great about the job you’re doing for them.” I know that saying this book changed the way I perceive life is a little dramatic, but it did make me analyze how I behave around others and how I can start implementing positive change in my actions. After understanding the difference between service and hospitality, I have really tried to give my bosses, co-workers, clients, classmates, and professors more than they expect." },
      { imageSrc: "favs/12.jpeg", title: "SUNGLASSES", description: "Eye Trash Chocolate Cat Eye Sunglasses from Le Specs", additionalDescription: "Simply my favorite pair :) I think it's one of the few pairs of glasses I have ever tried on that proportionally looks good on my very round face" },
      { imageSrc: "favs/11.jpeg", title: "HOSPITALITY ACT", description: "Hosting", additionalDescription: "My passion for food extends beyond just my own enjoyment; it's in the act of hosting and bringing people together that I find the ultimate fulfillment. Welcoming friends and loved ones into my home, setting the table with care, and serving up a feast crafted with love is an act of hospitality that ignites my soul. It's not just about the food—it's about curating an experience that nourishes both body and spirit, creating memories that linger long after the last crumb has been savored." }
    ];
  
    // Select the grid container element
    const gridContainer = document.querySelector('.grid-container');
  
    // Loop through the grid data and create grid items
    gridData.forEach(item => {
      // Create grid item container
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
  
      // Create and append image element
      const image = document.createElement('img');
      image.src = item.imageSrc;
      image.alt = item.title;
      gridItem.appendChild(image);
  
      // Create and append title element
      const title = document.createElement('p');
      title.classList.add('title');
      title.textContent = item.title;
      gridItem.appendChild(title);
  
      // Create and append description element
      const description = document.createElement('p');
      description.textContent = item.description;
      gridItem.appendChild(description);
  
      // Create and append additional description element
      const additionalDescription = document.createElement('p');
      additionalDescription.textContent = item.additionalDescription;
      gridItem.appendChild(additionalDescription);
  
      // Append the grid item to the grid container
      gridContainer.appendChild(gridItem);
      
    
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Title data
    const titleText = "MY FAVORITE THINGS";
  
    // Select the title element
    const titleElement = document.getElementById('grid-title');
  
    // Set the title text
    titleElement.textContent = titleText;
  
    // Array of data for grid items
    const gridData = [
      // Your grid item data here...
    ];
  
    // Select the grid container element
    const gridContainer = document.querySelector('.grid-container');
  
    // Loop through the grid data and create grid items...
  });
  