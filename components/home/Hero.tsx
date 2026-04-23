"use client";

import CyberNeuralNetwork from '../CyberNeuralNetwork';

import HeroLogo from '../HeroLogo';



export default function Hero() {

    return (

        <section className="flex flex-col relative h-screen w-full md:flex-row items-center justify-center overflow-hidden">

            {/* Animated Cyber Background */}

            <CyberNeuralNetwork />


            <HeroLogo />


        </section>



    );

}