import React from 'react';
import './Blog.css';
import { FaArrowRight } from 'react-icons/fa'; 
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.jpg';
import Blog3 from '../../assets/Blog3.png';
import shapeOne from '../../assets/shape-1.png';

const Blog = () => {
  return (
    <section className="blog" id="blog">
        <h2 className="section__title text-cs">Latest Blog</h2>
        <p className="section__subtitle">
            My <span>Articles and Writings</span>
        </p>

        <div className="blog__container container grid">
            {/* Blog Item 1 */}
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">OCTOBER 10, 2021</span>
                <h3 className="blog__title">Getting Started with Next.js for Production-Ready React Apps</h3>
                <p className="blog__description">
                    This can provide an introduction to Next.js and how it builds on React for server-side rendering, 
                    static site generation, faster performance, etc. Cover key concepts like pages and routing, 
                    data fetching methods, Link components for navigation, Image optimization features, and more. 
                    Also give a sample project walkthrough on setting up a Next.js app from scratch and benefits 
                    over plain React apps.
                </p>
                <a href="https://nextjs.org/docs" className="link">
                    Read More 
                    <FaArrowRight className="link__icon" />
                </a>
                <img src={Blog1} alt="Next.js Blog" className="blog__img" />
            </div>

            {/* Blog Item 2 */}
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">December 09, 2023</span>
                <h3 className="blog__title">Applying Google's Material Design 3 Guidelines for Intuitive UI/UX</h3>
                <p className="blog__description">
                    In this article, explore Google's latest Material Design 3 framework for interfaces and ways 
                    to implement its recommendations, like theme/layout customization, components such as cards, 
                    buttons, navigation menus, etc. Highlight key MD3 principles of simplicity, focus, and user 
                    control. Demonstrate tangible improvements via before/after UI examples or case studies 
                    based on MD3.
                </p>
                <a href="https://m2.material.io/design/introduction" className="link">
                    Read More 
                    <FaArrowRight className="link__icon" />
                </a>
                <img src={Blog2} alt="Material Design Blog" className="blog__img" />
            </div>

            {/* Blog Item 3 */}
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">December 09, 2023</span>
                <h3 className="blog__title">Using Tailwind CSS for Rapid Styling in Web Development</h3>
                <p className="blog__description">
                    Here, describe the utility-first concept behind Tailwind CSS that allows customizable styled 
                    components with just utility classes versus regular CSS. Discuss how it can boost developer 
                    productivity for rapid builds without getting bogged down by CSS specificity issues. Provide 
                    setup guidance along with examples for building responsive layouts, navigation, forms, etc., 
                    using Tailwind's flexbox/grid toolkit and sizing/spacing utilities.
                </p>
                <a href="https://tailwindcss.com/docs/installation" className="link">
                    Read More 
                    <FaArrowRight className="link__icon" />
                </a>
                <img src={Blog3} alt="Tailwind CSS Blog" className="blog__img" />
            </div>
        </div>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="Decorative Shape" className="shape" />
        </div>
    </section>
  );
};

export default Blog;
