import React from 'react'

export const Hero = () => {
  return (
    <>
     <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">25% de réduction sur tous les produits.</p>
            <h2 className="h1 hero-title">
              Du Bio <span className="span">De Qualité</span>
              fruit &amp; <span className="span">vegetables.</span>
            </h2>
            <p className="hero-text">
              Il a non seulement survécu à cinq siècles, mais il a également fait des bonds.
            </p>
            <a href="/shop" className="btn btn-primary">
              <span className="span">Achetez</span>
              <ion-icon name="chevron-forward" aria-hidden="true" />
            </a>
          </div>
          <figure className="hero-banner">
            <img
              src="./images/hero-banner.png"
              width={603}
              height={634}
              loading="lazy"
              alt="Vegetables"
              className="w-100"
            />
          </figure>
        </div>
      </section>
    </>
  )
}
