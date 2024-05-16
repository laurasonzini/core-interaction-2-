
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
                    'colon.png',
                    'comma.png',
                    'exclamation.png',
                    'period.png',
                    'question.png',
                    'semicolon.png',
                    'threedots.png',
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
                  
              