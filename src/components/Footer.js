import React, {Component} from 'react';

const Footer = props => {
  return (
    <footer>
      <p className='footer-links'>
        <a
          href='https://github.com/JessieJiePeng/react-shopping-cart-webpack.git'
          target='_blank'
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href = 'mailto:jessie.jie.peng@hotmail.com' target='_blank'>
          Need any help?
        </a>
      </p>
      <p>
        &copy; 2018 <strong>Pure Baby Clothes</strong> - Loving Store
      </p>
    </footer>
  );
}

export default Footer;