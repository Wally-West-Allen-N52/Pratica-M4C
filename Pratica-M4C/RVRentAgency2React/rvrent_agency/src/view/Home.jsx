import '../css/style.css';
import '../css/swiper-bundle.min.css'


export default function Home() {
    return (
        <main className="main">
            {/* ==================== HOME ==================== */}
            <section className="home" id="home">
                <img src={require('../img/banner/banner-01.jpg')} />

                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__data-subtitle">Discover your place</span>
                        <h1 className="home__data-title">LIVE YOUR WILDHOOD <br/> Adventure anywhere  <b>are you  <br/> ready?</b></h1>
                        <a href="#" className="button">Find your RV</a>
                    </div>
                </div>
            </section>

            {/* <!--==================== ABOUT ====================--> */}
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className='destination'>Destination</h2>
                        <h2 className="section__title about__title">More Information <br /> About The Best RVs</h2>
                        <p className="about__description">You can find the most beautiful and pleasant places.
                            place now.
                        </p>
                        <a href="#" className="button">Reserve a RV</a>
                    </div>

                    <div className="about__img">
                        <div className="about__img-overlay">
                            <img src={require('../img/bast-ways/best-way01.jpg')} />
                        </div>

                        <div className="about__img-overlay">
                        <img src={require('../img/bast-ways/best-way02.jpg')} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--==================== DISCOVER ====================--> */}
            <section className="discover section" id="discover">
                <h1 className='Promotion'>Promotion</h1>
                <h2 className="section__title">Discover the most <br /> attractive places</h2>

                <div className="discover__container container swiper-container">
                    <div className="swiper-wrapper">
                        {/* <!--==================== DISCOVER 1 ====================--> */}
                        <div className="discover__card swiper-slide">
                        <img src={require('../img/bast-ways/best-way04.jpg')} />
                            <div className="discover__data">
                                <h2 className="discover__title">Live</h2>
                                <span className="discover__description">24 hours a day</span>
                            </div>
                        </div>

                        {/* <!--==================== DISCOVER 2 ====================--> */}
                        <div className="discover__card swiper-slide">
                        <img src={require('../img/bast-ways/best-way05.jpg')} />
                            <div className="discover__data">
                                <h2 className="discover__title">Where</h2>
                                <span className="discover__description">Anywhere</span>
                            </div>
                        </div>

                        {/* <!--==================== DISCOVER 3 ====================--> */}
                        <div className="discover__card swiper-slide">
                        <img src={require('../img/bast-ways/eee.jpg')} />
                            <div className="discover__data">
                                <h2 className="discover__title">You want</h2>
                                <span className="discover__description">You deserve</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}