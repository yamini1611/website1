import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CSS/notes.css'
const Notesdetails = () => {
  const [title, setTitle] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // Fetch the data for the specific id (replace 'http://localhost:4000/blog' with your API endpoint)
    fetch(`http://localhost:4000/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
      });
  }, [id]);

  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

  return (
    <div style={{ marginTop: 140 }}>
      <div>
        <h3 id='titlenotes' style={{ fontSize: 28 }}>Nov 16, 2019</h3>
        <h2 id='titlenotes'>{formattedTitle}</h2>
        <p id='pnotes'>Formal wear only serves as the base - it's the accessories you adorn that perfect the quintessential formal look. However, styling <br></br> plays a massive role in the same. It should ideally have a little bit of everything to make your formal look a truly distinctive one.<br></br> Here are a few tips on how you can style your formal wear: </p>
      </div>
      <div>
      <h3 id='tit2not'><b>Accessories For Men - Tips: </b></h3>

        <ul id='contnotes'>
          <li><span id='strong'>Pocket Squares</span> - These are a great, suave addition to your formal look. It’s not always necessary that your pocket square should match your formal wear - it just shouldn't clash with it drastically.</li>
          <li><span  id='strong'>Cufflinks</span> - Cufflinks add a touch of class to your suit. Adding cufflinks to your shirt will keep it firm and in place as well.</li>
          <li><span  id='strong'>Watches</span> - Your watch should be just as dressy as the suit your wear. Watches made from stainless steel are a great complement to your meeting look. </li>
          <li><span  id='strong'>Tie Clip </span>- The best way to complete your formal look (and also keep your tie in place) is to go for a simple tie clip. It also works to keep your tie neat and wrinkle-free throughout the day!</li>
          <li><span  id='strong'>Belt</span> - Leather belts are always a popular choice. An essential tip is to always match your belt with your formal shoes. </li>
          <li><span  id='strong'>Footwear</span>- Footwear is arguably one of the most important pieces of clothing in an outfit for men. Always opt for leather or suede as it rounds off your formal look with a refined touch. </li>
        </ul>
      </div>
      <div>
      <h3 id='tit2not'><b>Accessories For Women - Tips: </b></h3>

        <ul id='contnotes'>
          <li><span  id='strong'>Scarves</span> - If you're feeling chilly or if the weather allows for it, it’s always good to wear a professional-looking scarf with a suit. Just keep in mind that the scarves you choose should be accessory ones, and not winter scarves. </li>
          <li><span  id='strong'>Belt</span> - A thin belt accentuates any woman’s figure, so it’s essential for you to choose a slim one that is in a contrast colour from your outfit. The belt and shoe rule that is a must for men doesn’t usually apply for women, though. </li>
          <li><span  id='strong'>Jewellery</span> - If you’re heading for any formal event, avoid wearing large costume jewellery. Earrings should be conservative and small. Necklaces are acceptable, as long as they are delicate or are pendants. An elegant watch is a must</li>
          <li><span  id='strong'>Purse/Handbag</span> - Always opt for a classy leather bag that can fit all your essentials like your laptop. This adds a touch of professionalism to your look.</li>
          <li><span  id='strong'>Purse/Handbag</span> - Always opt for a classy leather bag that can fit all your essentials like your laptop. This adds a touch of professionalism to your look.</li>
        </ul>
      </div>
      <div>
        <h3 id='tit2not'><b>Conclusion</b></h3>
        <p id='pnotes'>For both men and women, getting your accessories right is an integral part of nailing the formal look. However, unless the base is right, the impact you create won’t be an effective one - start by finding customised workwear that complements your frame to a tee at Acecraft! </p>
      </div>
      <hr id='hy'></hr>
      <div>
        <h1 id='no' style={{paddingLeft:100}}>0 Comment</h1>
        <hr id='hy'></hr>
        <h2 id='no' style={{paddingLeft:100}}>Leave a Comment</h2><br></br>
       <form id='x' action="" method="post">
        <label id='hj'>Name</label><br></br>
        <input  id='in' class="form-control" type="text" placeholder="Name" aria-label="default input example" required></input>
        <label  id='hj'>Email</label><br></br>
        <input id='in'type="email" placeholder="Email" class="form-control" required></input><br></br>
        <label  id='hj'>Message</label><br></br>
       <textarea id='in'placeholder="Your Comment"class="form-control"></textarea><br></br>
       <button type="button" id='post' style={{ paddingLeft:450 ,paddingRight:500 }} >Post Comment</button>
       </form>
     <br></br>
      </div>
    </div>
  );
};

export default Notesdetails;
