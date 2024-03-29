
                document.addEventListener('DOMContentLoaded', () => {
                    const container = document.getElementById('container');
                    const trailSpace = document.getElementById('trail-space');
                    const navBarHeight = document.querySelector('nav').offsetHeight;
                    const pTextTop = document.querySelector('p').offsetTop;
                    const pTextBottom = pTextTop + document.querySelector('p').offsetHeight;
                    const question_button = document.getElementById('underlineEffectLink1');
                  
          

                  question_button.onclick = function() {
                    document.getElementById('question').style.backgroundColor = "red";

                  };
                  const exclaim_button = document.getElementById('underlineEffectLink');
                  
          

                  exclaim_button.onclick = function() {
                    document.getElementById('ex-point').style.backgroundColor = "green";

                  };
                  const semicol_button = document.getElementById('underlineEffectLink3');
                  semicol_button.onclick = function() {
                    document.getElementById('semicol').style.backgroundColor = "pink";

                  };
                  const comma_button = document.getElementById('underlineEffectLink4');
                  
          

                  comma_button.onclick = function() {
                    document.getElementsById('comma').style.backgroundColor = "blue";

                  };
                    // Array of four image paths
                   const imagePaths = [
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1208066161607184394/interaction_prototypes-01.png?ex=65f46349&is=65e1ee49&hm=e4fe31cb177287633d5e5b90477ddc2a59d27b11342cef0adf573413152a6c2f&',
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1208066173162491964/interaction_prototypes-02.png?ex=65f4634c&is=65e1ee4c&hm=059c5263204459b4d7d9c349071938e813c583bb348e1c63eb19bbfd009f7241&',
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1208066173162491964/interaction_prototypes-02.png?ex=65f4634c&is=65e1ee4c&hm=059c5263204459b4d7d9c349071938e813c583bb348e1c63eb19bbfd009f7241&',
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1214709821840822313/interaction_prototypes-03_2.png?ex=65fa19ad&is=65e7a4ad&hm=5b1557d57aab5071d9ce8011a7f6684ea81166f3c4feb022e4b853a8c5d87581&',
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1212941480814051338/interaction_prototypes_Recovered-07.png?ex=65f3aac8&is=65e135c8&hm=7f97d353b3d4d16f749a60fc507fe8e614c38252d36c57eb69e851bc9b2d5710&',
                    'https://cdn.discordapp.com/attachments/1158576612300824598/1208066198810664960/interaction_prototypes-04.png?ex=65f46352&is=65e1ee52&hm=5344f94abf77120344cfbf498010dd8328264fa9435ddc2515bec61696eabe8a&',
                ];
                  
                    document.addEventListener('mousemove', (event) => {
                      const mouseX = event.clientX;
                      const mouseY = event.clientY + window.scrollY; // Consider the scroll position
                  
                      // Check if mouse coordinates are within the specified region (trail space)
                      const withinTrailSpace = mouseY > navBarHeight && mouseY < pTextTop && mouseX > trailSpace.offsetLeft && mouseX < trailSpace.offsetLeft + trailSpace.offsetWidth;
                  
                      if (withinTrailSpace) {
                        const image = document.createElement('img');
                        const imagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)]; // Randomly choose an image from the array
                  
                        image.src = imagePath;
                        image.classList.add('trail-image');
                  
                        // Adjust the position of each image to create spacing
                        image.style.left = mouseX + 'px';
                        image.style.top = mouseY + 'px';
                  
                        container.appendChild(image);
                      }
                    });
                  });
                  
              