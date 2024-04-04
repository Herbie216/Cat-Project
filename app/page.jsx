'use client'
/*
turn project into a cat item sales page with:
1. home page with (aboutme and contact links)clickable pic to send you to page with pics of items to sell 
2. click on pic of item to be sold to reveal info page (with description n price)
3. on info page have the ability to add to cart as well as view cart 
4. view cart page with link to check out page  (possibly have buttons to skip around to all forms in each of the previous pages)
5. check out with address to deliver and cc info (validation schema to handle address and cc info) 
6. completed page with thank you for shopping
7. once layout is in basic form look at some basic layout for css via tailwind
*/
import Image from "next/image";
import axios from 'axios'
import React from 'react';
import Link from 'next/link';
import { Form, Info, Contact, About, Cart, Completed, ProductCard, Products } from '@/app/Components'
// using JSON server 
const items =
  [
    { id: 1, description: 'description', image: 'Picture', value: null, cart: false },
    { id: 2, description: 'description', image: 'Picture', value: null, cart: false },
    { id: 3, description: 'description', image: 'Picture', value: null, cart: false },
    { id: 4, description: 'description', image: 'Picture', value: null, cart: false },
    { id: 5, description: 'description', image: 'Picture', value: null, cart: false },
    { id: 6, description: 'description', image: 'Picture', value: null, cart: false },
    { id: 7, description: 'description', image: 'Picture', value: null, cart: false },
    { id: 8, description: 'description', image: 'Picture', value: null, cart: false },
    { id: 9, description: 'description', image: 'Picture', value: null, cart: false },
  ]

  const Home = () => {
    return (
      <div>
        <h1>Welcome to our Cat Products Store!</h1>
        {/* Wrap the text inside the Link component */}
        <Link href="/products">
          View Products
        </Link>
        <div>
          <h2>Navigation</h2>
          <ul>
            <li>
              <Link legacyBehavior href="/about">
                <a>About Me</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Render Products component */}
        <Products items={items} />
      </div>
    );
  };
  
  export default Home;