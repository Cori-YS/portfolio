import { SocialIcons } from '../ui/social-icons';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function About() {
  return (
    <div className='lg:w-4/5 lg:mx-auto'>
      <h1 className='font-sans font-extrabold text-4xl pl-5 pt-5'>
        Ismélio Cori
      </h1>
      <p className='p-5 font-mono text-gray-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan
        tortor nec lectus laoreet, at varius risus sagittis. Pellentesque vitae
        lacus aliquet, malesuada tortor vehicula, rutrum ex. Nunc dapibus
        aliquam est, varius ultricies mi sodales ultricies. Vestibulum
        vestibulum dolor sit amet lorem finibus, eu faucibus sapien imperdiet.
        Sed blandit auctor facilisis. Nulla laoreet, magna quis tincidunt
        tempus, metus ante volutpat dolor, sit amet sagittis massa nibh in odio.
        Integer fermentum facilisis magna, sed accumsan urna varius sed. In
        dignissim lectus laoreet, consectetur leo ac, ultricies nunc. Curabitur
        pellentesque luctus rutrum. Maecenas vel magna laoreet, aliquet leo
        eget, maximus felis. Etiam non purus finibus, consequat augue quis,
        tincidunt justo.
      </p>

      <div className='bg-gray p-3 m-5 rounded-xl font-mono text-gray-text lg:w-[330] lg:mx-auto'>
        <p className='flex'>
          <FaEnvelope className='mt-1 mr-1' />
          Email:
          <a
            href='mailto:ismeliocori@hotmail.com'
            className='hover:text-blue ml-1'
          >
            ismeliocori@hotmail.com
          </a>
        </p>
        <p className='flex'>
          <FaPhone className='mt-1 mr-1' />
          Phone:
          <a href='tel:+244943491361' className='hover:text-blue ml-1'>
            +244943491361
          </a>
        </p>
        <div className='justify-self-center pt-2'>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
