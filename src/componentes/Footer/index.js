import './footer.css'

const Footer = () => {
  return(
 <footer className='footer'>
  <section>
    <ul>
      <li>
     <a href='https://facebook.com' target='blank'>
     <img src='./imagens/fb.png' alt='logo Facebook' />
     </a>
      </li>
      <li>
      <a href='https://twitter.com' target='blank'>
      <img src='./imagens/tw.png' alt='logo Twitter' />
      </a>
      </li>
      <li>
      <a href='https://instagram.com' target='blank'>
      <img src='./imagens/ig.png' alt='logo Instagram' />
      </a>
      </li>
    </ul>
    </section>
  <section>
  <img src='./imagens/logo.png' alt='logo Organo' />
  </section>
  <section>
    <p>
      Desenvolvido by Alura.
    </p>
    </section>
 </footer>
  )
}

export default Footer