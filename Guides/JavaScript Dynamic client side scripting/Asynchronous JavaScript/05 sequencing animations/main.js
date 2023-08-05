const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

//   alice1.animate(aliceTumbling, aliceTiming)

// implementation with something that works, but has the promise version
// of the "callback hell" problem
alice1.animate(aliceTumbling, aliceTiming).finished.then(()=>{
    alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
        alice3.animate(aliceTumbling, aliceTiming)
    })
})

// implementation with a promise chain
alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => { return alice2.animate(aliceTumbling, aliceTiming).finished})
  .then(() => { return alice3.animate(aliceTumbling, aliceTiming)});

// implementation using async and await.
async function my_animation (){
    alice1Animated = await alice1.animate(aliceTumbling, aliceTiming).finished;
    alice2Animated = await alice2.animate(aliceTumbling, aliceTiming).finished;
    alice3Animated = await alice3.animate(aliceTumbling, aliceTiming).finished;
}

my_animation();
