import React from "react";

function Carousle() {
    return (
        <div className="container">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://source.unsplash.com/250x250?clothes" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/250x250?jackets" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/250x250?shirts" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousle;