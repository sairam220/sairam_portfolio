import {contact} from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">HIRE ME</h2>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="glow-on-hover">
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
