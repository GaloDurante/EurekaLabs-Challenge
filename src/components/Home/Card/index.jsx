/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './index.module.css';

const Card = ({ data }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div
      className={`flex flex-col md:flex-row bg-white rounded-lg w-full mb-10 max-w-72 min-w-72 md:max-w-none`}
    >
      <div className="md:w-60 md:border-r-2 border-b-2 border-gray-100 p-6 w-full flex flex-col items-center justify-center">
        <img
          className="w-40"
          src={
            data.presentations[activeItem].image_url
              ? data.presentations[activeItem].image_url
              : '/assets/default_image.png'
          }
          alt={data.title}
        />
      </div>
      <div className="flex flex-col justify-between w-full p-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl font-bold">{data.title}</p>
          <div className="flex flex-col md:flex-row items-center mt-2">
            <p className="text-purple-400 text-lg font-semibold text-center">
              Presentations:{' '}
            </p>
            <div className="flex justify-between gap-2 md:ml-2">
              {data.presentations.map((item, index) => (
                <button
                  key={index}
                  className={`${
                    activeItem === index
                      ? 'bg-purple-400 text-white'
                      : 'text-purple-400'
                  } py-1 px-6 rounded-xl border-purple-400 ${styles.border} `} // Don't allow me to use border border-purple-400 to apply a border
                  onClick={() => setActiveItem(index)}
                >
                  {item.variant_presentation}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-8 ">
          <div className="font-semibold text-lg text-center md:text-left">
            <p>
              Price:{' '}
              <span className="text-3xl">
                ${data.presentations[activeItem].price}
              </span>
            </p>
            <p>
              Average Price:{' '}
              <span className="text-xl">${data.average_price}</span>
            </p>
          </div>
          <div className="flex flex-col justify-end mt-8 md:mt-0">
            <p className="font-semibold text-lg text-center md:text-end md:align-baseline">
              Availability:{' '}
              <span
                className={`${
                  data.presentations[activeItem].availability
                    ? 'bg-green-400'
                    : 'bg-red-400'
                } text-white font-normal text-center rounded-lg py-1 px-2`}
              >
                {data.presentations[activeItem].availability
                  ? 'In Stock'
                  : 'Out of Stock'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
