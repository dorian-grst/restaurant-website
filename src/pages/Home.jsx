import React from 'react'

import Menu from '../components/Menu.jsx'

import '../styles/Home.scss'

import dot from '../assets/dot.svg'
import chevronsDown from '../assets/chevrons-down.svg'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import location from '../assets/location.png'
import arrowUp from '../assets/arrow-up-right.svg'

function Home() {
    const tags = ['TAPAS', 'RESTAURANT', 'BAR']

    return (
        <div className="p-9">
            <section
                id="titles"
                className="home flex flex-col items-center xl:h-[100vh] "
            >
                <div className="flex justify-between">
                    {tags.map((tag, index) => (
                        <React.Fragment key={'tags-' + tags.indexOf(tag)}>
                            <h4>{tag}</h4>
                            {index !== tags.length - 1 && (
                                <img src={dot} alt="sparkle" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="py-28 leading-none md:w-10/12">
                    <h1>AUBERGE DE LA TOUR</h1>
                </div>
                <div className="flex flex-col gap-4 leading-tight md:w-10/12 lg:w-6/12">
                    <h2>
                        Savourez des tapas authentiques et des cocktails uniques
                    </h2>
                    <h3>
                        Découvrez des plats préparés avec soin, des vins fins et
                        une sélection de cocktails artisanaux pour des soirées
                        mémorables entre amis ou en amoureux
                    </h3>
                </div>
                <div className="bounce hidden lg:visible lg:flex lg:py-20 xl:h-full">
                    <a href="#images" className="flex ">
                        <img className="w-16" src={chevronsDown} alt="arrow" />
                    </a>
                </div>
            </section>
            <section
                id="images"
                className="hidden md:relative md:my-14 md:flex md:h-[40vh] md:w-full lg:h-[50vh] xl:h-[100vh]"
            >
                <img
                    className="border-8 border-white md:absolute md:right-12 md:top-12 md:w-6/12 xl:right-48 xl:top-32"
                    src={img2}
                    alt="food"
                />
                <img
                    className="border-8 border-white md:absolute md:bottom-12 md:left-24 md:w-2/5 xl:bottom-32 xl:left-48"
                    src={img1}
                    alt="food"
                />
            </section>
            <section className="menu relative -mx-9 flex h-auto flex-col items-center gap-12 pt-16 md:gap-16 md:pt-0 lg:py-12 xl:gap-48">
                <div className="mx-auto flex items-center border-2 border-primary px-8 py-3">
                    <h3>CARTE</h3>
                </div>
                <Menu />
                <div className=" xl:visible xl:h-[98vh] xl:w-full xl:bg-primary">
                    {' '}
                </div>
            </section>
            <section className="pt-12 md:pb-12 lg:pt-0">
                <div className="flex flex-col justify-between gap-8 md:flex-col md:pl-32 md:pr-32 lg:pb-8 xl:flex-row xl:pt-16">
                    <div className="">
                        <img
                            className="border-8 border-white"
                            src={location}
                            alt="location"
                        />
                    </div>
                    <div className="flex max-w-xl flex-col gap-8">
                        <div>
                            <h5>AVENUE DE PEZENAS,</h5>
                            <h5>34290 VALROS</h5>
                        </div>
                        <div>
                            <h5>04 67 98 52 01</h5>
                        </div>
                        <p>
                            L&apos;Auberge de la Tour, un restaurant-bar
                            &agrave; tapas incontournable. <br></br> Notre
                            &eacute;tablissement vous propose une
                            exp&eacute;rience culinaire alliant tradition et
                            innovation.
                        </p>
                        <p>
                            Nous vous accueillons tous les jours de la semaine,
                            midi et soir, sauf le dimanche et le lundi.<br></br>{' '}
                            Venez déguster nos délices et profiter d&apos;un
                            cadre convivial.
                        </p>
                        <div className="flex flex-row gap-4 md:gap-12 lg:gap-16 justify-between lg:justify-normal">
                            <div>
                                <a
                                    className="flex flex-row"
                                    href="https://www.facebook.com/aubergedelatourvalros/?locale=fr_FR"
                                    target="_blank"
                                    rel="noreferrer"
                                    alt="facebook"
                                >
                                    <h3>FACEBOOK</h3>
                                    <img
                                        src={arrowUp}
                                        alt="arrow"
                                        className="w-8"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    className="flex flex-row"
                                    href="https://www.instagram.com/aubergedelatourvalros/"
                                    target="_blank"
                                    rel="noreferrer"
                                    alt="instagram"
                                >
                                    <h3>INSTAGRAM</h3>
                                    <img
                                        src={arrowUp}
                                        alt="arrow"
                                        className="w-8"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
