import Image from 'next/image';
import art5 from '../../public/Images/art5.webp';
import art1 from '../../public/Images/art1.jpg';
import art2 from '../../public/Images/art2.jpg';
import art3 from '../../public/Images/art3.webp';
import art4 from '../../public/Images/art4.jpg';
import art6 from '../../public/Images/art6.jpg';
import art7 from '../../public/Images/art7.jpg';

export default function Home() {
  return (
    <div>
      <div className='logo'></div>
      <div className='header'>
        <div className='letters'>
          <div>a</div>
          <div>r</div>
          <div>t</div>
          <div>w</div>
        </div>
        <div className='letters'>
          <div>o</div>
          <div>r</div>
          <div>k</div>
          <div>s</div>
        </div>
      </div>

      <div className='website-content'>
        <div className='img-holder'>
          <Image
            src='https://res.cloudinary.com/dnmsm78fj/image/upload/w_800,h_500,q_80/v1740662451/pexels-mikitayo-18156011_1_sk3in8.jpg'
            alt='Website image'
            priority
          />
        </div>
        <div className='content-holder'>
          <div className='row'>
            <h1>History</h1>
          </div>

          <div className='row'>
            <div className='img'>
              <Image src={art1} alt='History1' priority />
            </div>
          </div>

          <div className='row'>
            <div className='img'>
              <Image src={art2} alt='History2' priority />
            </div>
          </div>
          <div className='row'>
            <div className='img'>
              <Image src={art3} alt='History3' priority />
            </div>
          </div>
          <div className='row'>
            <div className='img'>
              <Image src={art4} alt='History4' priority />
            </div>
          </div>
          <div className='row'>
            <div className='img'>
              <Image src={art6} alt='History5' priority />
            </div>
          </div>
          <div className='row'>
            <div className='img'>
              <Image src={art7} alt='History6' priority />
            </div>
          </div>

          <div className='row'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nam suscipit aliquam iste, corrupti voluptate in nostrum cumque
              accusantium ex!
            </p>
          </div>

          <div className='row'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nam suscipit aliquam iste, corrupti voluptate in nostrum cumque
              accusantium ex!
            </p>
          </div>
          <div className='row'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nam suscipit aliquam iste, corrupti voluptate in nostrum cumque
              accusantium ex!
            </p>
          </div>
          <div className='row'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nam suscipit aliquam iste, corrupti voluptate in nostrum cumque
              accusantium ex!
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
