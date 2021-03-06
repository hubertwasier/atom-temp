export default function ContactForm() {
  return (
    <form
      name="contact"
      action="/success"
      method="POST"
      data-netlify="true"
      className="text-gray-900"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname" className="dark:text-gray-100">
          Your Name:
        </label>{' '}
        <br />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail" className="dark:text-gray-100">
          Your Email:
        </label>{' '}
        <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage" className="dark:text-gray-100">
          Message:
        </label>{' '}
        <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit" className="dark:text-gray-100">
          Send
        </button>
      </p>
    </form>
  )
}
