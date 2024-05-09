
document.addEventListener("DOMContentLoaded", function() {
  let paginationBubbles = document.querySelectorAll('.pagination-bubble');
  paginationBubbles?.forEach((bullet, index, arr) => {
    bullet.addEventListener("click", e => {
      let activeSlideEl = document.querySelector(".pagination-bubble.active")
      let activeSlideIndex = parseInt(activeSlideEl.dataset.index)
      handleCustomBullet(bullet, index+1, arr, activeSlideIndex)
    })
  })

  function handleCustomBullet(bullet, index, arr, activeIndex) {
    let dir = 'next',length = arr.length, step = 1
    if(index > activeIndex) {
      step = index - activeIndex
    }
    else{
      dir = 'prev'
      step = activeIndex - index
    }
    bullet.closest("slider-component").customGoToSlide(step, dir)
  }
})
