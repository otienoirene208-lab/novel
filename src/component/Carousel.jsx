import React from 'react'
const Mycarousel = () => {
    return (
        <div id='carouselExample' className='carousel slide row justify-content-center' data-bs-ride='carousel'>

       {/* indicators fot navigation */}
       <div className='carousel-indicators'>
        <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="0" className='active'></button>
        <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="1"></button>
        <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="2"></button>
       </div>

            {/* slides */}
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src="images/gilded.jpeg" className='d-block w-100' height='600px' alt="" />
                    
                </div>
                <div className='carousel-item'>
                    <img src="/images/Between two fires.jpeg"className='d-block w-100' height='200px' alt="" />
                   
                </div>
                <div className='carousel-item'>
                    <img src="/image/magora.jpeg" className='d-block w-100' height='200px'alt="" />
                    
                </div>
            </div>
        {/* controls */}
        <button className='carousel-control-prev' type='button' data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className='carousel-control-prev-icon bg-warning' type='button' data-bs-target="#carouselExample" data-bs-slide="next" ></span>
        </button>
        <button className='carousel-control-next' data-bs-target="#carouselExample" data-bs-slide="next"> 
            <span className='carousel-control-next-icon bg-warning'></span>
        </button>

        <button>
            <span></span>
        </button>

        {/* Hello */}
        {/* Hello */}


        </div>
    )
}

export default Mycarousel