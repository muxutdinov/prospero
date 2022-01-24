import React from 'react';
import './Card.css'
import card1 from '../../../assets/images/card-5.svg'
import bookmark from '../../../assets/icons/Bookmark.svg'
import Comment from '../../../assets/icons/Comment.svg'
import Heart from '../../../assets/icons/Heart.svg'

const Card = () => {
  return <div className='cardbesh'>
    <div className="left">
       <img src={card1} alt='img' className='cardimg' />
    </div>
    <div className="right">
      <div className="cardtop">
        <div className="flightbesh">Science</div>
        <img className='bookmark' src={bookmark} alt='img'/>
      </div>
      <div className="CardTitle">
        Forests Protect the Climate. A Future With More Storms Would Mean Trouble 
      </div>
      <div className="CardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quia error itaque quidem veritatis mollitia tempora id, ad possimus libero, nesciunt quasi deleniti suscipit exercitationem sint saepe similique delectus? Repellendus.</div>
      <div className="comments">
          <div className="commentItem">Aug 6</div>
          <div className="commentItem"><img src={Comment}alt='img'/>  <div className='cardnumber'>342</div></div>
          <div className="commentItem"><img src={Heart} alt='img'/>  <div className='cardnumber'>830</div></div>
      </div>
    </div>
  </div>;
};

export default Card;
