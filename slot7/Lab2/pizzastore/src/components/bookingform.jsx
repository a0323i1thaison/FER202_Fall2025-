export default function BookingForm() {
  return (
    <section className="booking">
      <h2>Book Your Table</h2>
      <form>
        <input type="text" placeholder="Your Name *" required />
        <input type="email" placeholder="Your Email *" required />
        <select>
          <option>Select a Service</option>
          <option>Dine In</option>
          <option>Takeaway</option>
        </select>
        <textarea placeholder="Please write your comment"></textarea>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </section>
  );
}